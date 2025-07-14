import dotenv from "dotenv"
dotenv.config({ path: "../../.env" });
import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE']
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

io.listen(+process.env.PORT!);