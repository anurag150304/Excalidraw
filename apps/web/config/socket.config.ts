import { DataType, Shapes } from "@repo/types/commonTypes";
import { io, Socket } from "socket.io-client";

export let socket: Socket | null = null;
export const InitializeSocket = (accessToken: string) => {
    socket = io(process.env.SOCKET_URL, {
        extraHeaders: { Authorization: `Bearer ${accessToken}` }
    });

    socket.on("connect", () => {
        console.log("Connected to socket server:", socket?.id);
    });

    socket.on("disconnect", () => {
        console.log("Disconnected from socket server");
    });

    return () => {
        socket?.disconnect();
    };
}

export const sendMessage = (eventName: string, data: Partial<DataType>) => {
    if (socket) {
        socket.emit(eventName, data);
    } else {
        console.error("Socket not connected");
    }
};

export const receiveMessage = (eventName: string, callback: (data: { sender: string, slug: Shapes } & { error: string }) => void) => {
    if (socket) {
        socket.on(eventName, callback);
    } else {
        console.error("Socket not connected");
    }
};
