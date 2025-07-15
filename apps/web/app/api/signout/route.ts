import { NextRequest, NextResponse } from "next/server";
import redisClient from "@repo/redis/redisClient";
import { errHandler } from "@repo/utils/errHandler";

export async function GET(req: NextRequest) {
    try {
        const token = req.headers.get("authorization")?.split(' ')[1];
        if (!token) throw new errHandler("No token provided", 401);
        if (typeof token != "string") throw new errHandler("Invalid token", 401);

        await redisClient.set(token, "blackListed", "EX", 7 * 24 * 60 * 600);
        return NextResponse.json({ message: "Logged Out successfully" }, { status: 200 });
    } catch (err) {
        const { message, status = 500 } = err as errHandler;
        return NextResponse.json({ error: message }, { status });
    }
}