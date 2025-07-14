import * as z from "zod";

export const userSchema = z.object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().optional(),
    email: z.email({
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email format"
    }).min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const loginSchema = z.object({
    email: z.email({
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email format"
    }).min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});
