import { Coords, DataType, Shapes } from "@repo/types/commonTypes"
import { dawLine, drawCircle, drawRectangle, pencil } from "./shapes";
import axios from "axios";

interface DrawParamTypes {
    type: "rect" | "circ" | "line" | "pencil" | "lock" | "eraser";
    canvas: HTMLCanvasElement;
    shapes: Shapes[];
    sendCanvas: (eventName: string, data: Partial<DataType>) => void;
    roomId: string;
}

let pixels: { x: number, y: number }[] = []; // for pencil feature

export function draw({ canvas, shapes, sendCanvas, roomId, type }: DrawParamTypes) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return () => { };

    const coords: Coords = {
        initial: { x: 0, y: 0 },
        final: { x: 0, y: 0 },
    };
    const size = { width: 0, height: 0 };
    let isClicked = false;

    function handleOnMouseDown(e: MouseEvent) {
        isClicked = true;
        if (type === "eraser") return;
        coords.initial.x = e.offsetX;
        coords.initial.y = e.offsetY;
        if (type === "pencil") {
            pixels.push({ x: coords.initial.x, y: coords.initial.y });
        }
    }

    function handleOnMouseUp(e: MouseEvent) {
        isClicked = false;

        if (type === "eraser") {
            axios.post("/api/update", { shapes, roomId })
                .catch(err => console.log(err))
            return;
        }

        coords.final.x = e.offsetX;
        coords.final.y = e.offsetY;

        shapes.push({
            type,
            cords: {
                initial: { x: coords.initial.x, y: coords.initial.y },
                final: { x: coords.final.x, y: coords.final.y },
            },
            size: {
                h: Math.abs(coords.final.y - coords.initial.y),
                w: Math.abs(coords.final.x - coords.initial.x)
            },
            ...(type === "pencil" && { pixels })
        });

        if (sendCanvas && roomId) {
            sendCanvas("send_message", {
                roomId,
                slug: shapes[shapes.length - 1]
            });
        }
        pixels = [];
    }

    function handleOnMouseMove(e: MouseEvent) {
        if (!isClicked) return;

        if (type === "eraser" && shapes.length > 0) {
            shapes = shapes.filter(shape => {
                const x1 = shape.cords.initial.x;
                const y1 = shape.cords.initial.y;
                const x2 = shape.cords.final.x;
                const y2 = shape.cords.final.y;

                if (!((e.offsetX >= x1 && e.offsetX <= x2) && (e.offsetY >= y1 && e.offsetY <= y2))) {
                    return shape;
                }
            });
            addExistingShapes(canvas, ctx!, shapes);
            return;
        }

        size.width = e.offsetX - coords.initial.x;
        size.height = e.offsetY - coords.initial.y;

        ctx!.lineWidth = 2;
        ctx!.strokeStyle = '#ffffff';
        ctx!.fillStyle = "#ffffff";

        switch (type) {
            case "rect": addExistingShapes(canvas, ctx!, shapes);
                drawRectangle(ctx!, coords.initial.x, coords.initial.y, size.width, size.height);
                break;

            case "circ": addExistingShapes(canvas, ctx!, shapes);
                drawCircle(ctx!,
                    (e.clientX + coords.initial.x) / 2,
                    (e.clientY + coords.initial.y) / 2,
                    Math.max(Math.abs(size.width), Math.abs(size.height)) / 2);
                break;

            case "line": addExistingShapes(canvas, ctx!, shapes);
                dawLine(ctx!, { initial: { x: coords.initial.x, y: coords.initial.y }, final: { x: e.offsetX, y: e.offsetY } });
                break;

            case "pencil": pencil(ctx!, pixels[pixels.length - 1]!.x, pixels[pixels.length - 1]!.y, e.offsetX, e.offsetY);
                pixels.push({ x: e.offsetX, y: e.offsetY });
                break;
            default: return;
        }

    }

    canvas.addEventListener("mousedown", handleOnMouseDown);
    canvas.addEventListener("mouseup", handleOnMouseUp);
    canvas.addEventListener("mousemove", handleOnMouseMove);

    return () => {
        canvas.removeEventListener("mousedown", handleOnMouseDown);
        canvas.removeEventListener("mouseup", handleOnMouseUp);
        canvas.removeEventListener("mousemove", handleOnMouseMove);
    };
}

export function addExistingShapes(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, shapes: Shapes[]) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = "#ffffff";

    shapes.forEach(shape => {
        if (shape.type == "rect") {
            drawRectangle(ctx, shape.cords.initial.x, shape.cords.initial.y, shape.size.w, shape.size.h);
        }

        if (shape.type == "circ") {
            drawCircle(ctx,
                (shape.cords.initial.x + shape.cords.final.x) / 2,
                (shape.cords.initial.y + shape.cords.final.y) / 2,
                Math.max(Math.abs(shape.size.w), Math.abs(shape.size.h)) / 2);
        }

        if (shape.type === "line") {
            dawLine(ctx, {
                initial: { x: shape.cords.initial.x, y: shape.cords.initial.y },
                final: { x: shape.cords.final.x, y: shape.cords.final.y }
            });
        }

        if (shape.type === "pencil" && shape.pixels && shape.pixels.length > 2) {
            let lastX = shape.pixels[0]!.x;
            let lastY = shape.pixels[0]!.y;

            for (let i = 1; i < shape.pixels.length; i++) {
                pencil(ctx, lastX, lastY, shape.pixels[i]!.x, shape.pixels[i]!.y);
                lastX = shape.pixels[i]!.x;
                lastY = shape.pixels[i]!.y;
            }
        }
    });
}