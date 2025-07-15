import dotenv from "dotenv"
dotenv.config({
    path: "../../.env",
    debug: true,
    encoding: 'utf8',
    override: true,
    quiet: true
});

import { Server } from "socket.io";
import dbClient from "@repo/db-config/dbClient"
import { validateToken } from "@repo/utils/jwt"
import redisClient from "@repo/redis/redisClient"


const io = new Server({
    cors: {
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

io.use(async (socket, next) => {
    const token = socket.handshake.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) return next(new Error("No token provided!"));

    const blackListed = await redisClient.get(token);
    if (blackListed) return next(new Error("Token blacklisted, Login again!"));

    try {
        const { decoded, err } = validateToken(token, process.env.NEXTAUTH_SECRET!);
        if (err) throw err;

        const user = await dbClient.users.findFirst({ where: { email: decoded?.email } });
        if (!user) throw new Error("Validation failed!");
        next();
    } catch (err) {
        next(err as Error);
    }
});

io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on("message", (event) => {
        console.log(event);
    });

    socket.on("disconnect", () => {
        socket.disconnect(true);
        console.log("Socket disconnected");
    });
});

redisClient.on("connect", () => console.log("Connected to redis DB"));
io.listen(+process.env.PORT!);