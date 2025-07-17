"use client";

// import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { SocketProvider } from "../../context/socket.context";
import { useEffect, useRef } from "react";
import { draw } from "../../canvas/draw";

export default function CanvasPage() {
    return (<SessionProvider>
        <SocketProvider>
            <Canvas />
        </SocketProvider>
    </SessionProvider>)
}

function Canvas() {
    // const session = useSession();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        draw(canvasRef.current);
    }, [canvasRef])
    return (
        <canvas ref={canvasRef} className="bg-[#000000e9]" height={603} width={1306} />
    )
}