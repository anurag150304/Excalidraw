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
    name: string;
    email: string;
}

const rooms = new Map<string, UserSocket[]>();
const io = new Server({
    cors: {
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

io.use(async (socket, next) => {
    const userSocket = (socket as UserSocket);
    const token = userSocket.handshake.headers.authorization?.split(' ')[1];
    if (!token) return next(new Error("No token provided!"));

    const blackListed = await redisClient.get(token);
    if (blackListed) return next(new Error("Token blacklisted, Login again!"));

    try {
        const { decoded, err } = validateToken(token, process.env.NEXTAUTH_SECRET!);
        if (err) throw err;

        const user = await dbClient.users.findFirst({ where: { email: decoded?.email } });
        if (!user) throw new Error("Validation failed!");

        userSocket.name = `${user.firstname} ${user.lastname ?? ''}`;
        userSocket.email = user.email;
        next();
    } catch (err) {
        next(err as Error);
    }
});

io.on("connection", (socket) => {
    const userSocket = (socket as UserSocket);
    console.log(`Socket connected: ${userSocket.id}`);

    userSocket.on("join", (data) => {
        const { roomId } = data;
        if (!roomId) {
            userSocket.emit("socket_error", { error: "Room Id required!" });
            return;
        }

        if (rooms.has(roomId)) rooms.set(roomId, [...rooms.get(roomId)!, userSocket]);
        else rooms.set(roomId, [userSocket]);
        userSocket.join(roomId);
    });

    userSocket.on("send_message", (data) => {
        const { roomId, message } = data;
        if (!roomId || !message) {
            userSocket.emit("socket_error", { error: "Room Id & Message is required!" });
            return;
        }

        if (!rooms.has(roomId)) {
            userSocket.emit("socket_error", { error: "Room not found!" });
            return;
        }
        userSocket.to(roomId).emit("recieve_message", {
            sender: userSocket.name,
            message
        });
    });

    userSocket.on("disconnect", () => {
        userSocket.disconnect(true);
        console.log("Socket disconnected");
    });
});

redisClient.on("connect", () => console.log("Connected to redis DB"));
io.listen(+process.env.PORT!);