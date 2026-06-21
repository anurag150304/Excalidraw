import { NextRequest, NextResponse } from "next/server";
import { prisma as DB } from "@repo/db-config/DB";
import { errHandler } from "@repo/utils/errHandler";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const { userId } = await params;
    const allRooms = await DB.rooms.findMany({
      where: { adminId: userId },
      select: { name: true, roomId: true, adminId: true, createdAt: true },
    });

    return NextResponse.json({ rooms: allRooms }, { status: 200 });
  } catch (err) {
    const { status = 500, message } = err as errHandler;
    return NextResponse.json({ error: message }, { status });
  }
}
