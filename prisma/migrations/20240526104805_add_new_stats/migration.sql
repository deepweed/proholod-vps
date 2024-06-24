-- AlterTable
ALTER TABLE "stats" ADD COLUMN     "connecting_power" TEXT NOT NULL DEFAULT 'Нет данных',
ADD COLUMN     "diameter_of_condensate_pipe" TEXT NOT NULL DEFAULT 'Нет данных',
ADD COLUMN     "unit_sound_level" TEXT NOT NULL DEFAULT 'Нет данных',
ADD COLUMN     "unit_sound_level_block" TEXT NOT NULL DEFAULT 'Нет данных',
ADD COLUMN     "weightBlock" TEXT,
ADD COLUMN     "weight_block_pack" TEXT,
ADD COLUMN     "widthBlock" TEXT,
ADD COLUMN     "width_block_pack" TEXT;
