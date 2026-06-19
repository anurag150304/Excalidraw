import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client/client.js";
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const globalForPrisma = global;
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma;
