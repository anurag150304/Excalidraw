import { errHandler } from "@repo/utils/errHandler";
import { NextRequest, NextResponse } from "next/server";
import DB from "@repo/db-config/dbClient"
import { Shapes } from "@repo/types/commonTypes"

export async function POST(req: NextRequest) {
    try {
        const { roomId, shapes } = await req.json();
        if (!roomId) throw new errHandler("Room Id required!", 400);
        if (!shapes) throw new errHandler("Shapes required!", 400);

        const room = await DB.rooms.findFirst({ where: { roomId }, select: { roomId: true, adminId: true } });
        if (!room) throw new errHandler("Room not found!", 404);

        await DB.canvas.deleteMany({ where: { roomId: room.roomId, userId: room.adminId } });
        await DB.canvas.createMany({ data: shapes.map((sp: Shapes) => ({ slug: JSON.stringify(sp), userId: room.adminId, roomId: room.roomId })) });

        return NextResponse.json({ message: "Operation successfull" }, { status: 200 });
    } catch (err) {
        const { message, status = 500 } = err as errHandler;
        return NextResponse.json({ error: message }, { status });
    }
}