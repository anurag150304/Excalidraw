"use client";

import axios from "axios";
import { SessionProvider, useSession } from "next-auth/react";
import { Suspense, useEffect, useRef, useState } from "react";
import { addExistingShapes } from "../../canvas/draw";
import { DataType, Shapes } from "@repo/types/commonTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { InitializeSocket, receiveMessage, sendMessage, socket } from "../../config/socket.config";
import TopPanel from "../../components/Top.pannel";

export default function CanvasPage() {
    return (<SessionProvider>
        <Suspense fallback={<div>Loading...</div>}>
            <Canvas />
        </Suspense>
    </SessionProvider>)
}

function Canvas() {
    const mainCanvas = useRef<HTMLCanvasElement>(null);
    const drawCanvas = useRef<HTMLCanvasElement>(null);
    const [roomId, setRooId] = useState<string>('');
    const shapes = useRef<Shapes[]>([]);
    const params = useSearchParams();
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status !== "authenticated" || !mainCanvas.current || !drawCanvas.current) return;
        mainCanvas.current.classList.remove("opacity-0")
        drawCanvas.current.classList.remove("opacity-0")

        mainCanvas.current.height = window.innerHeight;
        mainCanvas.current.width = window.innerWidth;

        drawCanvas.current.height = window.innerHeight;
        drawCanvas.current.width = window.innerWidth;

        const roomId = params.get("roomId");
        if (!roomId) {
            alert("Room ID is required");
            return router.push("/");
        }

        setRooId(roomId);

        InitializeSocket(session.data.user?.accessToken);
        sendMessage("join", { roomId });
        fetchAllCanvas(roomId);

        receiveMessage("recieve_message", handleReceiveMessage);
        receiveMessage("socket_error", handleSocketError);

        return () => {
            socket?.off("join", (eventName: string, data: Partial<DataType>) => {
                if (socket) {
                    socket.emit(eventName, data);
                } else {
                    console.error("Socket not connected");
                }
            });
            socket?.off("recieve_message", handleReceiveMessage);
            socket?.off("socket_error", handleSocketError);
        };

    }, [session.status, session.data?.user.accessToken, params, router]);

    const handleReceiveMessage = (data: { sender: string; slug: Shapes }) => {
        shapes.current.push(data.slug);
        if (mainCanvas.current) {
            const ctx = mainCanvas.current.getContext("2d");
            if (ctx) {
                addExistingShapes(mainCanvas.current, ctx, shapes.current);
            }
        }
    };

    const handleSocketError = (err: { error: string }) => alert(err.error);

    async function fetchAllCanvas(roomId: string) {
        axios.get("/api/canvas", { params: { roomId } })
            .then(res => {
                if (!res.data.canvas || !res.data.canvas.length) return;

                res.data.canvas.map((val: { slug: string }) => {
                    shapes.current.push(JSON.parse(val.slug));
                });
                addExistingShapes(mainCanvas.current!, mainCanvas.current!.getContext("2d")!, shapes.current);
            })
            .catch((err) => {
                console.log(err);
                alert(err.response?.data?.error ?? "An error occurred");
            });
    }

    return (
        <main className="relative h-screen w-screen overflow-hidden">
            {mainCanvas.current && drawCanvas.current && shapes.current && roomId && (
                <TopPanel mainCanvas={mainCanvas.current} drawCanvas={drawCanvas.current} shapes={shapes.current} roomId={roomId} />)}
            <canvas ref={mainCanvas} className="bg-[#121212] absolute z-30 opacity-0" /> {/* Using two canvases layer optimization*/}
            <canvas ref={drawCanvas} className="bg-[#12121200] absolute z-40 opacity-0" /> {/* 2nd for drawing shapes, and 1st for storing shapes */}
        </main>
    )
}