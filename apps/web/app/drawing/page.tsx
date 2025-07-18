"use client";

import axios from "axios";
import { SessionProvider, useSession } from "next-auth/react";
import { Suspense, useEffect, useRef } from "react";
import { addExistingShapes, draw } from "../../canvas/draw";
import { Shapes } from "@repo/types/commonTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { InitializeSocket, receiveMessage, sendMessage, socket } from "../../lib/socket.config";

export default function CanvasPage() {
    return (<SessionProvider>
        <Suspense fallback={<div>Loading...</div>}>
            <Canvas />
        </Suspense>
    </SessionProvider>)
}

function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shapes = useRef<Shapes[]>([]);
    const params = useSearchParams();
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status !== "authenticated" || !canvasRef.current) return;
        const roomId = params.get("roomId");
        if (!roomId) {
            alert("Room ID is required");
            return router.push("/");
        }

        InitializeSocket(session.data.user.accessToken);
        sendMessage("join", { roomId });

        fetchAllCanvas(roomId);
        draw(canvasRef.current, shapes.current, sendMessage, roomId);

        receiveMessage("recieve_message", handleReceiveMessage);
        receiveMessage("socket_error", handleSocketError);

        return () => {
            socket?.off("recieve_message", handleReceiveMessage);
            socket?.off("socket_error", handleSocketError);
        }

    }, [session.status, session.data?.user.accessToken, params, router]);

    const handleReceiveMessage = (data: { sender: string; slug: Shapes }) => {
        shapes.current.push(data.slug);
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                addExistingShapes(canvasRef.current, ctx, shapes.current);
            }
        }
    };

    const handleSocketError = (err: { error: string }) => alert(err.error);

    async function fetchAllCanvas(roomId: string) {
        axios.get("/api/canvas", { params: { roomId } })
            .then(res => {
                if (!res.data.canvas || res.data.canvas.length < 1) return;

                res.data.canvas.map((val: { slug: string }) => {
                    shapes.current.push(JSON.parse(val.slug));
                });
                addExistingShapes(canvasRef.current!, canvasRef.current!.getContext("2d")!, shapes.current);
            })
            .catch((err) => {
                console.log(err);
                alert(err.response?.data?.error ?? "An error occurred");
            });
    }

    return (
        <main className="relative h-screen w-screen overflow-hidden">
            <canvas ref={canvasRef} className="bg-[#000000e9]" height={window.innerHeight} width={window.innerWidth} />
        </main>
    )
}