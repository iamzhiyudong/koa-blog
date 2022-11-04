/*
  Warnings:

  - You are about to alter the column `deleted_at` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `Tag` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `modified_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `Tag` MODIFY `modified_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `deleted_at` DATETIME NULL;
