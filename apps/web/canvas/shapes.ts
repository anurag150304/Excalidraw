import { Coords } from "@repo/types/commonTypes"

export function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

export function drawRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    ctx.strokeRect(x, y, width, height);
}

export function dawLine(ctx: CanvasRenderingContext2D, coords: Coords) {
    ctx.beginPath();
    ctx.moveTo(coords.initial.x, coords.initial.y);
    ctx.lineTo(coords.final.x, coords.final.y);
    ctx.stroke();
    ctx.closePath();
}