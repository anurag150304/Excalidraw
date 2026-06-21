import { errHandler } from "@repo/utils/errHandler";
import { NextRequest, NextResponse } from "next/server";
import { roomSchema } from "@repo/zod-validations/room.validation";
import { prisma as DB } from "@repo/db-config/DB"

export async function POST(req: NextRequest) {
    try {

        const { data, success, error } = roomSchema.safeParse(await req.json());
        if (!success) {
            throw new errHandler(error.issues.map(err => err.message).join(", "), 409);
        }
        const { name, roomId, adminId } = data;

        const room = await DB.rooms.create({
            data: {
                name,
                roomId,
                admin: { connect: { id: adminId } }
            }
        });

        return NextResponse.json({
            message: "Room created sucessfully",
            roomId: room.roomId
        }, { status: 201 });

    } catch (err) {
        const { status = 500, message } = err as errHandler;
        return NextResponse.json({ error: message }, { status });
    }
}