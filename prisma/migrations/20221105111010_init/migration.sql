/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `is_del` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `modified_at` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `is_del` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `modified_at` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_del` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `modified_at` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `deleted_at`,
    DROP COLUMN `is_del`,
    DROP COLUMN `modified_at`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `deleted_at`,
    DROP COLUMN `is_del`,
    DROP COLUMN `modified_at`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User` DROP COLUMN `deleted_at`,
    DROP COLUMN `is_del`,
    DROP COLUMN `modified_at`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
