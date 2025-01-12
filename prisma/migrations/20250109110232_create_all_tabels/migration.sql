-- CreateEnum
CREATE TYPE "TypeCategory" AS ENUM ('main', 'subcategory');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('main', 'additional');

-- CreateEnum
CREATE TYPE "OrderTypes" AS ENUM ('new', 'pending', 'success', 'reject');

-- CreateTable
CREATE TABLE "HeroBillboards" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "subtitle" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL,

    CONSTRAINT "HeroBillboards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroBillboardsTranslation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "langCode" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL DEFAULT '',
    "heroBillboardId" TEXT NOT NULL,

    CONSTRAINT "HeroBillboardsTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billboard" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Billboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "billboardId" TEXT,
    "name" TEXT NOT NULL,
    "type" "TypeCategory" NOT NULL DEFAULT 'main',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentId" TEXT,
    "maxPrice" DECIMAL(10,2),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 0,
    "type" "ProductType" NOT NULL DEFAULT 'main',
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "backgroundColor" TEXT NOT NULL DEFAULT '',
    "textColor" TEXT NOT NULL DEFAULT '',
    "position" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "article" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTranslation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "languageCode" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "city" TEXT NOT NULL DEFAULT '',
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "paymentMethod" TEXT NOT NULL DEFAULT '',
    "ref_city" TEXT NOT NULL DEFAULT '',
    "ref_separation" TEXT NOT NULL DEFAULT '',
    "comment" TEXT NOT NULL DEFAULT '',
    "orderNumber" TEXT NOT NULL DEFAULT '',
    "invoiceId" TEXT NOT NULL DEFAULT '',
    "message" TEXT NOT NULL DEFAULT '',
    "messagngerType" TEXT NOT NULL DEFAULT '',
    "userName" TEXT NOT NULL DEFAULT '',
    "postService" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT '',
    "totalPrice" INTEGER NOT NULL DEFAULT 0,
    "orderStatus" "OrderTypes" NOT NULL DEFAULT 'new',
    "separation" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "typeDelivary" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderId" TEXT NOT NULL,
    "price" TEXT NOT NULL DEFAULT '',
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characteristic" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT DEFAULT '',

    CONSTRAINT "Characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacteristicTranslation" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "languageCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "characteristicId" TEXT NOT NULL,

    CONSTRAINT "CharacteristicTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCharacteristic" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "characteristicId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductCharacteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCharacteristicTranslation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "languageCode" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "productCharacteristicId" TEXT NOT NULL,

    CONSTRAINT "ProductCharacteristicTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "phoneNumber" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "avatar" TEXT NOT NULL DEFAULT '',
    "role" TEXT NOT NULL DEFAULT 'user',
    "password" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "desc" TEXT NOT NULL,
    "avtor" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewPhoto" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,

    CONSTRAINT "ReviewPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewTranslation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "desc" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,

    CONSTRAINT "ReviewTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "messenger" TEXT NOT NULL,
    "typeMessanger" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryInfo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "DeliveryInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryInfoTranslation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "deliveryId" TEXT NOT NULL,

    CONSTRAINT "DeliveryInfoTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentMethodTranslation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "paymentMethodId" TEXT NOT NULL,

    CONSTRAINT "PaymentMethodTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQTranslation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "languageCode" TEXT NOT NULL,
    "faqId" TEXT NOT NULL,

    CONSTRAINT "FAQTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Category_billboardId_idx" ON "Category"("billboardId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory_productId_categoryId_key" ON "ProductCategory"("productId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductTranslation_productId_key" ON "ProductTranslation"("productId");

-- CreateIndex
CREATE INDEX "ProductTranslation_productId_idx" ON "ProductTranslation"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_url_key" ON "Image"("url");

-- CreateIndex
CREATE INDEX "Image_productId_idx" ON "Image"("productId");

-- CreateIndex
CREATE INDEX "Order_userId_idx" ON "Order"("userId");

-- CreateIndex
CREATE INDEX "OrderItem_productId_orderId_idx" ON "OrderItem"("productId", "orderId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_productId_orderId_key" ON "OrderItem"("productId", "orderId");

-- CreateIndex
CREATE INDEX "CharacteristicTranslation_characteristicId_idx" ON "CharacteristicTranslation"("characteristicId");

-- CreateIndex
CREATE INDEX "ProductCharacteristic_productId_idx" ON "ProductCharacteristic"("productId");

-- CreateIndex
CREATE INDEX "ProductCharacteristic_characteristicId_idx" ON "ProductCharacteristic"("characteristicId");

-- CreateIndex
CREATE INDEX "ProductCharacteristicTranslation_productCharacteristicId_idx" ON "ProductCharacteristicTranslation"("productCharacteristicId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCharacteristicTranslation_productCharacteristicId_la_key" ON "ProductCharacteristicTranslation"("productCharacteristicId", "languageCode");

-- CreateIndex
CREATE INDEX "ReviewPhoto_reviewId_idx" ON "ReviewPhoto"("reviewId");

-- CreateIndex
CREATE INDEX "ReviewTranslation_reviewId_idx" ON "ReviewTranslation"("reviewId");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryInfoTranslation_languageCode_key" ON "DeliveryInfoTranslation"("languageCode");

-- CreateIndex
CREATE INDEX "DeliveryInfoTranslation_deliveryId_idx" ON "DeliveryInfoTranslation"("deliveryId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethodTranslation_languageCode_key" ON "PaymentMethodTranslation"("languageCode");

-- CreateIndex
CREATE INDEX "PaymentMethodTranslation_paymentMethodId_idx" ON "PaymentMethodTranslation"("paymentMethodId");

-- CreateIndex
CREATE UNIQUE INDEX "FAQTranslation_languageCode_key" ON "FAQTranslation"("languageCode");

-- CreateIndex
CREATE INDEX "FAQTranslation_faqId_idx" ON "FAQTranslation"("faqId");

-- AddForeignKey
ALTER TABLE "HeroBillboardsTranslation" ADD CONSTRAINT "HeroBillboardsTranslation_heroBillboardId_fkey" FOREIGN KEY ("heroBillboardId") REFERENCES "HeroBillboards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_billboardId_fkey" FOREIGN KEY ("billboardId") REFERENCES "Billboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTranslation" ADD CONSTRAINT "ProductTranslation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacteristicTranslation" ADD CONSTRAINT "CharacteristicTranslation_characteristicId_fkey" FOREIGN KEY ("characteristicId") REFERENCES "Characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCharacteristic" ADD CONSTRAINT "ProductCharacteristic_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCharacteristic" ADD CONSTRAINT "ProductCharacteristic_characteristicId_fkey" FOREIGN KEY ("characteristicId") REFERENCES "Characteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCharacteristicTranslation" ADD CONSTRAINT "ProductCharacteristicTranslation_productCharacteristicId_fkey" FOREIGN KEY ("productCharacteristicId") REFERENCES "ProductCharacteristic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewPhoto" ADD CONSTRAINT "ReviewPhoto_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewTranslation" ADD CONSTRAINT "ReviewTranslation_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryInfoTranslation" ADD CONSTRAINT "DeliveryInfoTranslation_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "DeliveryInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethodTranslation" ADD CONSTRAINT "PaymentMethodTranslation_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FAQTranslation" ADD CONSTRAINT "FAQTranslation_faqId_fkey" FOREIGN KEY ("faqId") REFERENCES "FAQ"("id") ON DELETE CASCADE ON UPDATE CASCADE;
