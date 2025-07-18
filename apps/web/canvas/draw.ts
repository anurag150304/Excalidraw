import { Coords, DataType, Shapes } from "@repo/types/commonTypes"

const coords: Coords = { initial: { x: 0, y: 0 }, final: { x: 0, y: 0 } };
const size: { width: number, height: number } = { width: 0, height: 0 };
let isClicked: boolean = false;

export function draw(
    canvas: HTMLCanvasElement,
    shapes: Shapes[],
    sendCanvas?: (eventName: string, data: Partial<DataType>) => void,
    roomId?: string
) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (shapes.length > 0) {
        addExistingShapes(canvas, ctx, shapes);
    }

    canvas.addEventListener("mousedown", (e) => {
        isClicked = true;
        coords.initial.x = e.clientX;
        coords.initial.y = e.clientY;
    });

    canvas.addEventListener("mouseup", (e) => {
        isClicked = false;
        coords.final.x = e.clientX;
        coords.final.y = e.clientY;

        shapes.push({
            type: "rect",
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
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!isClicked) return;

        size.width = e.clientX - coords.initial.x;
        size.height = e.clientY - coords.initial.y;

        ctx.lineWidth = 2
        ctx.strokeStyle = 'white';

        addExistingShapes(canvas, ctx, shapes);
        ctx.strokeRect(coords.initial.x, coords.initial.y, size.width, size.height);
    });
}

export function addExistingShapes(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, shapes: Shapes[]) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2
    ctx.strokeStyle = 'white';

    shapes.forEach(shape => {
        ctx.strokeRect(shape.cords.initial.x, shape.cords.initial.y, shape.size.w, shape.size.h);
    });
}