/*
  Warnings:

  - You are about to drop the column `userName` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Order` table. All the data in the column will be lost.
  - Added the required column `messenger` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "userName",
ADD COLUMN     "messenger" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "userName",
ADD COLUMN     "messenger" TEXT NOT NULL DEFAULT '';
