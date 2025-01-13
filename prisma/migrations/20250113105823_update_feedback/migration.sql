/*
  Warnings:

  - You are about to drop the column `messenger` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the column `typeMessanger` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `messagngerType` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "messenger",
DROP COLUMN "name",
DROP COLUMN "typeMessanger",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "messagngerType" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
