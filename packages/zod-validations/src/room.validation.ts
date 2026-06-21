import * as z from "zod";

export const roomSchema = z.object({
    name: z.string().min(1, { error: "Room name is required!" }),
    roomId: z.string().min(1, { error: "Room Id is required!" }),
    adminId: z.string().min(1, { error: "Room creator is required!" })
});