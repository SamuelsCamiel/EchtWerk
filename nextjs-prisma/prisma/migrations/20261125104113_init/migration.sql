/*
  Warnings:

  - You are about to drop the column `FilterKleur` on the `PinPoints` table. All the data in the column will be lost.
  - You are about to drop the column `FilterNaam` on the `PinPoints` table. All the data in the column will be lost.
  - Added the required column `FilterColor` to the `PinPoints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FilterName` to the `PinPoints` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PinPoints` DROP COLUMN `FilterKleur`,
    DROP COLUMN `FilterNaam`,
    ADD COLUMN `FilterColor` VARCHAR(191) NOT NULL,
    ADD COLUMN `FilterName` VARCHAR(191) NOT NULL;
