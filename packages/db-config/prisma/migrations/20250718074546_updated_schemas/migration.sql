/*
  Warnings:

  - Changed the type of `roomId` on the `Rooms` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Canvas" DROP CONSTRAINT "Canvas_roomId_fkey";

-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "roomId",
ADD COLUMN     "roomId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Rooms_roomId_key" ON "Rooms"("roomId");

-- AddForeignKey
ALTER TABLE "Canvas" ADD CONSTRAINT "Canvas_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;
