/*
  Warnings:

  - You are about to drop the column `billboardId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `maxPrice` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `isFeatured` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Billboard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HeroBillboards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HeroBillboardsTranslation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_billboardId_fkey";

-- DropForeignKey
ALTER TABLE "HeroBillboardsTranslation" DROP CONSTRAINT "HeroBillboardsTranslation_heroBillboardId_fkey";

-- DropIndex
DROP INDEX "Category_billboardId_idx";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "billboardId",
DROP COLUMN "maxPrice";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "isFeatured";

-- DropTable
DROP TABLE "Billboard";

-- DropTable
DROP TABLE "HeroBillboards";

-- DropTable
DROP TABLE "HeroBillboardsTranslation";

-- CreateIndex
CREATE INDEX "Category_parentId_idx" ON "Category"("parentId");
