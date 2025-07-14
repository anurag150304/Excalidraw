import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "@repo/zod-validations/user.validation"
import dbClient from "@repo/db-config/dbClient"
import { errHandler } from "@repo/types/errorTypes"
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    const { success, error, data } = userSchema.safeParse(await req.json());
    if (!success) {
        return NextResponse.json({ errors: error.issues.map(err => err.message) }, { status: 400 });
    }

    try {
        const userExist = await dbClient.users.findFirst({ where: { email: data.email } });
        if (userExist) throw new errHandler("Email already taken!", 411);

        await dbClient.users.create({
            data: {
                firstname: data.firstname,
                ...(data.lastname && { lastname: data.lastname }),
                email: data.email,
                password: await bcrypt.hash(data.password, 10)
            }
        });
        return NextResponse.json({ message: "User created sucessfully" }, { status: 201 });
    } catch (err) {
        const { message, status = 500 } = err as errHandler;
        return NextResponse.json({ error: message }, { status });
    }
}