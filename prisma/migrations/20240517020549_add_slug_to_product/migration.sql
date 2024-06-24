/*
  Warnings:

  - A unique constraint covering the columns `[href]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "series" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "product_href_key" ON "product"("href");
