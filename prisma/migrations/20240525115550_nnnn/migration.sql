/*
  Warnings:

  - Made the column `is_inventor` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cooling_kw` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `warming_kw` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `max_trace` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `max_height` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `min_temp_cooling` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `max_temp_cooling` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `min_temp_warm` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `max_temp_warm` on table `stats` required. This step will fail if there are existing NULL values in that column.
  - Made the column `productId` on table `stats` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "stats" DROP CONSTRAINT "stats_productId_fkey";

-- AlterTable
ALTER TABLE "stats" ALTER COLUMN "is_inventor" SET NOT NULL,
ALTER COLUMN "cooling_kw" SET NOT NULL,
ALTER COLUMN "warming_kw" SET NOT NULL,
ALTER COLUMN "max_trace" SET NOT NULL,
ALTER COLUMN "max_height" SET NOT NULL,
ALTER COLUMN "min_temp_cooling" SET NOT NULL,
ALTER COLUMN "max_temp_cooling" SET NOT NULL,
ALTER COLUMN "min_temp_warm" SET NOT NULL,
ALTER COLUMN "max_temp_warm" SET NOT NULL,
ALTER COLUMN "productId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
