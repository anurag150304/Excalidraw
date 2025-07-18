/*
  Warnings:

  - You are about to drop the column `slug` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the `Chats` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[roomId]` on the table `Rooms` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roomId` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_userId_fkey";

-- DropIndex
DROP INDEX "Rooms_slug_key";

-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "slug",
ADD COLUMN     "roomId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Chats";

-- CreateTable
CREATE TABLE "Canvas" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "Canvas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rooms_roomId_key" ON "Rooms"("roomId");

-- AddForeignKey
ALTER TABLE "Canvas" ADD CONSTRAINT "Canvas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Canvas" ADD CONSTRAINT "Canvas_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
