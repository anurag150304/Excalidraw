"use client";

import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { SocketProvider } from "../../context/socket.context";

export default function CanvasPage() {
    return (<SessionProvider>
        <SocketProvider>
            <Canvas />
        </SocketProvider>
    </SessionProvider>)
}

function Canvas() {
    const session = useSession();
    console.log(session.data?.user)
    return (
        <h1>Canvas Page</h1>
    )
}