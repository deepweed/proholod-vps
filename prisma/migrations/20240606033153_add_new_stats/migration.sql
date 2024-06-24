/*
  Warnings:

  - You are about to drop the `belluna` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "belluna" DROP CONSTRAINT "belluna_productId_fkey";

-- AlterTable
ALTER TABLE "stats" ADD COLUMN     "cool_room_value" TEXT,
ADD COLUMN     "cool_warming" TEXT,
ADD COLUMN     "diametr_pipes" TEXT,
ADD COLUMN     "max_track_lenght" TEXT,
ADD COLUMN     "noise_lvl" TEXT,
ADD COLUMN     "nominal_power" TEXT,
ADD COLUMN     "power_consumption" TEXT,
ADD COLUMN     "temperature_in_camera" TEXT,
ADD COLUMN     "track_lenght" TEXT,
ADD COLUMN     "winter_set" TEXT;

-- DropTable
DROP TABLE "belluna";
