import dotenv from "dotenv"
dotenv.config({
    path: "../../.env",
    debug: true,
    encoding: 'utf8',
    override: true,
    quiet: true
});

import { Server, Socket } from "socket.io";
import dbClient from "@repo/db-config/dbClient"
import { validateToken } from "@repo/utils/jwt"
import redisClient from "@repo/redis/redisClient"

interface UserSocket extends Socket {
    userId: string;
    name: string;
    email: string;
}

const rooms = new Map<string, UserSocket[]>();
const io = new Server({
    cors: {
        origin: ["http://localhost:3001"],
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    },
    pingTimeout: 60_000
});

io.use(async (socket, next) => {
    const userSocket: UserSocket = (socket as UserSocket);
    const token = userSocket.handshake.headers.authorization?.split(' ')[1];
    if (!token) return next(new Error("No token provided!"));

    const blackListed = await redisClient.get(token);
    if (blackListed) return next(new Error("Token blacklisted, Login again!"));

    try {
        const { decoded, err } = validateToken(token, process.env.NEXTAUTH_SECRET!);
        if (err) throw err;

        const user = await dbClient.users.findFirst({ where: { email: decoded?.email } });
        if (!user) throw new Error("Validation failed!");

        userSocket.userId = user.id;
        userSocket.name = `${user.firstname} ${user.lastname ?? ''}`;
        userSocket.email = user.email;
        next();
    } catch (err) {
        next(err as Error);
    }
});

io.on("connection", (socket) => {
    const userSocket: UserSocket = (socket as UserSocket);
    console.log(`Socket connected: ${userSocket.id}`);

    userSocket.on("join", async (data) => {
        const { roomId } = data;

        if (!roomId) {
            userSocket.emit("socket_error", { error: "Room Id required!" });
            return;
        }

        const room = await dbClient.rooms.findFirst({ where: { roomId } });
        if (!room) {
            await dbClient.rooms.create({
                data: {
                    roomId,
                    admin: { connect: { id: userSocket.userId } }
                }
            });
        }

        const allSockets = rooms.get(roomId) ?? [];
        if (!allSockets.includes(userSocket)) {
            rooms.set(roomId, [...allSockets, userSocket]);
        }
        userSocket.join(roomId);
    });

    userSocket.on("send_message", async (data) => {
        const { roomId, slug } = data;

        if (!roomId || !slug) {
            userSocket.emit("socket_error", { error: "Room Id & Slug is required!" });
            return;
        }

        if (!rooms.has(roomId)) {
            userSocket.emit("socket_error", { error: "Room not found!" });
            return;
        }

        dbClient.canvas.create({
            data: {
                slug: JSON.stringify(slug),
                user: { connect: { id: userSocket.userId } },
                room: { connect: { roomId } }
            }
        })
            .catch(err => {
                console.log(err);
                userSocket.emit("socket_error", { error: err.message });
                return;
            });

        userSocket.to(roomId).emit("recieve_message", {
            sender: userSocket.name, slug
        });
    });

    userSocket.on("leave", (data) => {
        const { roomId } = data;
        if (!roomId) {
            userSocket.emit("socket_error", { error: "Room Id required!" });
            return;
        }

        if (!rooms.has(roomId)) {
            userSocket.emit("socket_error", { error: "Room not found!" });
            return;
        }

        const userRoom = rooms.get(roomId);
        if (!userRoom) {
            userSocket.emit("socket_error", { error: "You are not in this room!" });
            return;
        }
        rooms.set(roomId, userRoom.filter(skt => skt != userSocket));
        userSocket.leave(roomId);
    });

    userSocket.on("disconnect", () => {
        userSocket.disconnect(true);
        console.log("Socket disconnected");
    });
});

redisClient.on("connect", () => console.log("Connected to redis DB"));
io.listen(+process.env.PORT!);