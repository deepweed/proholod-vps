/*
  Warnings:

  - You are about to drop the column `image_path` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "image_path";

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "image_path" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
