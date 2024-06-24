/*
  Warnings:

  - Added the required column `image_path` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" ADD COLUMN     "image_path" TEXT NOT NULL;
