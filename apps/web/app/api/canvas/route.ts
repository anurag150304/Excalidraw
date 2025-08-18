import { NextRequest, NextResponse } from "next/server";
import { errHandler } from "@repo/utils/errHandler";
import dbClient from "@repo/db-config/dbClient"

export async function GET(req: NextRequest) {
    try {
        const roomId = req.nextUrl.searchParams.get("roomId");
        if (!roomId) throw new errHandler("Room Id is required!", 400);

        const allCanvas = await dbClient.canvas.findMany({
            where: { roomId },
            orderBy: { id: 'asc' },
            select: { slug: true }
        });
        return NextResponse.json({ canvas: allCanvas }, { status: 200 });
    } catch (err) {
        const { message, status = 500 } = err as errHandler;
        return NextResponse.json({ error: message }, { status });
    }

}