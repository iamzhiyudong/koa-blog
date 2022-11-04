/*
  Warnings:

  - You are about to alter the column `deleted_at` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `deleted_at` DATETIME NULL,
    MODIFY `modified_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
