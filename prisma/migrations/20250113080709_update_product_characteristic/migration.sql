/*
  Warnings:

  - A unique constraint covering the columns `[productId,characteristicId]` on the table `ProductCharacteristic` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ProductCharacteristic_characteristicId_idx";

-- DropIndex
DROP INDEX "ProductCharacteristic_productId_idx";

-- CreateIndex
CREATE INDEX "ProductCharacteristic_characteristicId_productId_idx" ON "ProductCharacteristic"("characteristicId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCharacteristic_productId_characteristicId_key" ON "ProductCharacteristic"("productId", "characteristicId");
