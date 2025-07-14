import { NextRequest, NextResponse } from "next/server";
import dbClient from "@repo/db-config/dbClient"
import { errHandler } from "@repo/types/errorTypes"
import { loginSchema } from "@repo/zod-validations/user.validation"
import { generateToken } from "@repo/utils/jwt"
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    const { success, error, data } = loginSchema.safeParse(await req.json());
    if (!success) {
        return NextResponse.json({ errors: error.issues.map(err => err.message) }, { status: 400 });
    }

    try {
        const user = await dbClient.users.findFirst({ where: { email: data.email } });
        if (!user) throw new errHandler("User not found!", 404);

        if (!await bcrypt.compare(data.password, user.password)) {
            throw new errHandler("Invalid credentials", 403);
        }

        const { token, err } = generateToken(user.email, process.env.JWT_SECRET!);
        if (err) throw new errHandler(err, 500);

        return NextResponse.json({ token: token! }, { status: 200 });
    } catch (err) {
        const { message, status = 500 } = err as errHandler;
        return NextResponse.json({ error: message }, { status });
    }
}