/*
  Warnings:

  - Added the required column `type` to the `Feed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `view` to the `Feed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Feed` ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `view` INTEGER NOT NULL;
