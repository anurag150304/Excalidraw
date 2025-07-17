export function draw(
    canvas: HTMLCanvasElement,
    itlCords: { x: number, y: number } = { x: 0, y: 0 },
    size: { width: number, height: number } = { width: 0, height: 0 },
    isClicked: boolean = false
) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.addEventListener("mouseup", () => {
        isClicked = false;
    });
    canvas.addEventListener("mousedown", (e) => {
        isClicked = true;
        itlCords = { x: e.clientX, y: e.clientY };
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!isClicked) return;
        size = {
            width: e.clientX - itlCords.x,
            height: e.clientY - itlCords.y
        };
        ctx.lineWidth = 2
        ctx.strokeStyle = 'white';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeRect(itlCords.x, itlCords.y, size.width, size.height);
    });

}