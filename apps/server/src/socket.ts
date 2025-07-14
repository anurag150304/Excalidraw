import { Server } from "socket.io";
import { Server as HttpServer } from "http";

let io: Server | null = null;

export function InitializeSocket(httpServer: HttpServer) {
    io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ['GET', 'POST', 'PUT', 'DELETE']
        }
    });

    io.on("connection", (socket) => {
        console.log(`Socket connected : ${socket.id}`);

        socket.on("message", (event) => {
            console.log(event);
        });

        socket.on("dissconnect", () => {
            console.log(`Socket disconnected ${socket.id}`);
        });
    });
}