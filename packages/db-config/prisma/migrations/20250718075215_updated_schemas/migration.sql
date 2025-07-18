-- DropForeignKey
ALTER TABLE "Canvas" DROP CONSTRAINT "Canvas_roomId_fkey";

-- AlterTable
ALTER TABLE "Canvas" ALTER COLUMN "roomId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Rooms" ALTER COLUMN "roomId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Canvas" ADD CONSTRAINT "Canvas_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;
