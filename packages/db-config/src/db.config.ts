import { PrismaClient } from "../generated/client/index.js"

declare global {
    var prisma: PrismaClient | undefined
}

const prisma = globalThis.prisma ?? new PrismaClient();
export default prisma;