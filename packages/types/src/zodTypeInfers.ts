import { userSchema } from "@repo/zod-validations";
import * as z from "zod";

export type User = { id: string | number } & z.infer<typeof userSchema>;
