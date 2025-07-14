import { userSchema } from "@repo/zod-validations/user.validation";
import * as z from "zod";

export type User = { id: string | number } & z.infer<typeof userSchema>;