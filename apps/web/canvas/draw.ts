import { Coords, DataType, Shapes } from "@repo/types/commonTypes"
import { dawLine, drawCircle, drawRectangle } from "./shapes";

interface DrawParamTypes {
    type: "rect" | "circ" | "line" | "pencil" | "lock";
    canvas: HTMLCanvasElement;
    shapes: Shapes[];
    sendCanvas: (eventName: string, data: Partial<DataType>) => void;
    roomId: string;
}

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
        coords.initial.x = e.clientX;
        coords.initial.y = e.clientY;
    }

    function handleOnMouseUp(e: MouseEvent) {
        isClicked = false;
        coords.final.x = e.clientX;
        coords.final.y = e.clientY;

        shapes.push({
            type,
            cords: {
                initial: { x: coords.initial.x, y: coords.initial.y },
                final: { x: coords.final.x, y: coords.final.y },
            },
            size: {
                h: coords.final.y - coords.initial.y,
                w: coords.final.x - coords.initial.x
            }
        });

        if (sendCanvas && roomId) {
            sendCanvas("send_message", {
                roomId,
                slug: shapes[shapes.length - 1]
            });
        }
    }

    function handleOnMouseMove(e: MouseEvent) {
        if (!isClicked) return;

        size.width = e.clientX - coords.initial.x;
        size.height = e.clientY - coords.initial.y;

        addExistingShapes(canvas, ctx!, shapes);

        ctx!.lineWidth = 2;
        ctx!.strokeStyle = 'white';

        if (type === "rect") {
            drawRectangle(ctx!, coords.initial.x, coords.initial.y, size.width, size.height);
        }
        if (type === "circ") {
            drawCircle(
                ctx!,
                (e.clientX + coords.initial.x) / 2,
                (e.clientY + coords.initial.y) / 2,
                Math.max(Math.abs(size.width), Math.abs(size.height)) / 2
            );
        }
        if (type === "line") {
            dawLine(ctx!, { initial: { x: coords.initial.x, y: coords.initial.y }, final: { x: e.clientX, y: e.clientY } });
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
    ctx.strokeStyle = 'white';

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
            dawLine(ctx!, {
                initial: { x: shape.cords.initial.x, y: shape.cords.initial.y },
                final: { x: shape.cords.final.x, y: shape.cords.final.y }
            });
        }
    });
}