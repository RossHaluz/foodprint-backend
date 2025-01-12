/*
  Warnings:

  - You are about to drop the column `address` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `postService` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `ref_city` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `ref_separation` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `separation` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `typeDelivary` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "address",
DROP COLUMN "city",
DROP COLUMN "comment",
DROP COLUMN "invoiceId",
DROP COLUMN "paymentMethod",
DROP COLUMN "postService",
DROP COLUMN "ref_city",
DROP COLUMN "ref_separation",
DROP COLUMN "separation",
DROP COLUMN "status",
DROP COLUMN "typeDelivary";
