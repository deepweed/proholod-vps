/*
  Warnings:

  - The `image_path` column on the `image` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "image" DROP COLUMN "image_path",
ADD COLUMN     "image_path" TEXT[];

-- AlterTable
ALTER TABLE "stats" ADD COLUMN     "recomend_square" INTEGER,
ALTER COLUMN "cooling_kw" DROP NOT NULL,
ALTER COLUMN "warming_kw" DROP NOT NULL,
ALTER COLUMN "max_trace" DROP NOT NULL,
ALTER COLUMN "max_height" DROP NOT NULL,
ALTER COLUMN "min_temp_cooling" DROP NOT NULL,
ALTER COLUMN "max_temp_cooling" DROP NOT NULL,
ALTER COLUMN "min_temp_warm" DROP NOT NULL,
ALTER COLUMN "max_temp_warm" DROP NOT NULL;
