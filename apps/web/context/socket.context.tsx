"use client";
import { createContext, JSX, RefObject, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { io, Socket } from "socket.io-client";


type DataType = { roomId: string, message: string };
interface SocketContextType {
    socket: RefObject<Socket | null>;
    sendMessage: (eventName: string, data: Partial<DataType>) => void;
    receiveMessage: (eventName: string, callback: () => void) => void;
}

export const SocketContext = createContext<SocketContextType | null>(null);
export function SocketProvider({ children }: { children: JSX.Element }) {
    const session = useSession();
    const socket = useRef<Socket | null>(null);

    useEffect(() => {
        if (session.status == "authenticated") {
            socket.current = io(process.env.SOCKET_URL, {
                extraHeaders: { Authorization: `Bearer ${session.data?.user.accessToken}` }
            });

            socket.current.on("connect", () => {
                console.log("Connected to socket server:", socket.current?.id);
            });

            socket.current.on("connect_error", (err) => {
                console.log(err.message);
            });

            socket.current.on("disconnect", () => {
                console.log("Disconnected from socket server");
            });
        }

        return () => {
            socket.current?.disconnect();
        };
    }, [session]);

    const sendMessage = (eventName: string, data: Partial<DataType>) => {
        if (socket.current) {
            socket.current.emit(eventName, data);
        } else {
            console.error("Socket not connected");
        }
    };

    const receiveMessage = (eventName: string, callback: () => void) => {
        if (socket.current) {
            socket.current.on(eventName, callback);
        } else {
            console.error("Socket not connected");
        }
    };

    return (
        <SocketContext.Provider value={{ socket, sendMessage, receiveMessage }}>
            {children}
        </SocketContext.Provider>
    );
};