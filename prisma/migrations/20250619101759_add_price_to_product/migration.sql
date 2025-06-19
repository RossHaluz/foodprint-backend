/*
  Warnings:

  - You are about to drop the column `priceForOne` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "priceForOne",
DROP COLUMN "totalPrice",
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;
