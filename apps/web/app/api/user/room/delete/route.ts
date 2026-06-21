import { NextRequest, NextResponse } from "next/server";
import { prisma as DB } from "@repo/db-config/DB";
import { errHandler } from "@repo/utils/errHandler";

export async function DELETE(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const roomId = params.get("roomId");

    if (!roomId) {
      throw new errHandler("Room Id is required!", 400);
    }

    const room = await DB.rooms.deleteMany({ where: { roomId } });
    if (!room.count) {
      throw new errHandler("Room not found!", 404);
    }

    return NextResponse.json(
      { message: "Room deleted successfully!" },
      { status: 200 },
    );
  } catch (err) {
    const { status = 500, message } = err as errHandler;
    return NextResponse.json({ error: message }, { status });
  }
}
