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

// Bresenham's Line Algorithm
export function pencil(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
    const dx = Math.abs(x2 - x1); // delta x (mid cord btw x1 & x2)
    const dy = Math.abs(y2 - y1); // delta y (mid cord btw y1 & y2)
    const sx = x2 > x1 ? 1 : -1; // incrementing / decrementing x cord based on the distance btw x1 & x2
    const sy = y2 > y1 ? 1 : -1; // incrementing / decrementing y cord based on the distance btw y1 & y2
    let dp = dx - dy; // decision parameter (decides what cord should be updated (x1 or y1 or both)  with there specific distance (x-axis or y-axis))

    while (true) {
        ctx.fillRect(x1, y1, 2, 2);
        if (x1 === x2 && y1 === y2) break;

        const d2 = 2 * dp; // simplifying the integer arithmetic (dp).
        if (d2 > -dy) { dp -= dy; x1 += sx }; // checks whether dp exceeds the current dy cord, then we've to increase the x cord by 1 and decrease the dp by dy cord
        if (d2 < dx) { dp += dx; y1 += sy }; // // checks whether dp exceeds the current dx cord, then we've to increase the y cord by 1 and increase the dp by dx cord
    }
}
