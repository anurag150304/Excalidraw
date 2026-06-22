import { NextRequest, NextResponse } from "next/server";
import { prisma as DB } from "@repo/db-config/DB";
import { errHandler } from "@repo/utils/errHandler";

export async function DELETE(req: NextRequest) {
  try {
    const { roomId, adminId } = await req.json();

    if (!roomId) {
      throw new errHandler("Room Id is required!", 400);
    }

    const isAdmin = await DB.rooms.findFirst({ where: { roomId } });
    if (!isAdmin) return NextResponse.json({ error: "Room not found!" }, { status: 404 });
    if (isAdmin.adminId !== adminId) {
      return NextResponse.json({ error: "Unauthorized Acion" }, { status: 403 });
    }

    const room = await DB.rooms.delete({ where: { roomId } });

    return NextResponse.json(
      { message: "Room deleted successfully!", roomId: room.roomId },
      { status: 200 },
    );
  } catch (err) {
    const { status = 500, message } = err as errHandler;
    return NextResponse.json({ error: message }, { status });
  }
}
