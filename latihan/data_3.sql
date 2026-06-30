-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema db_universitas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_universitas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_universitas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`table1` (
)
ENGINE = InnoDB;

USE `db_universitas` ;

-- -----------------------------------------------------
-- Table `db_universitas`.`mahasiswa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_universitas`.`mahasiswa` (
  `nim` INT NOT NULL,
  `nama` CHAR(255) NOT NULL,
  `prodi` CHAR(255) NOT NULL,
  `jenisKelamin` ENUM('laki-laki', 'perempuan') NULL DEFAULT NULL,
  `alamat` TEXT NOT NULL,
  `noHp` CHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (`nim`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_universitas`.`kota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_universitas`.`kota` (
  `idkota` INT NOT NULL,
  `nama kota` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idkota`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_universitas`.`penjual`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_universitas`.`penjual` (
  `idpenjual` INT NOT NULL,
  `nama` VARCHAR(100) NOT NULL,
  `alamat` TEXT NULL,
  `kota_idkota` INT NOT NULL,
  PRIMARY KEY (`idpenjual`),
  INDEX `fk_penjual_kota_idx` (`kota_idkota` ASC) VISIBLE,
  CONSTRAINT `fk_penjual_kota`
    FOREIGN KEY (`kota_idkota`)
    REFERENCES `db_universitas`.`kota` (`idkota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_universitas`.`produk`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_universitas`.`produk` (
  `idproduk` INT NOT NULL,
  `namaProduk` VARCHAR(100) NOT NULL,
  `hargaProduk` INT NOT NULL,
  `penjual_idpenjual` INT NOT NULL,
  PRIMARY KEY (`idproduk`, `penjual_idpenjual`),
  INDEX `fk_produk_penjual1_idx` (`penjual_idpenjual` ASC) VISIBLE,
  CONSTRAINT `fk_produk_penjual1`
    FOREIGN KEY (`penjual_idpenjual`)
    REFERENCES `db_universitas`.`penjual` (`idpenjual`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_universitas`.`katagori`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_universitas`.`katagori` (
  `idkatagori` INT NOT NULL,
  `namaKatagori` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idkatagori`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_universitas`.`penjual_katagori`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_universitas`.`penjual_katagori` (
  `idpenjual_katagori` INT NOT NULL,
  `katagori_idkatagori` INT NOT NULL,
  `penjual_idpenjual` INT NOT NULL,
  PRIMARY KEY (`idpenjual_katagori`, `katagori_idkatagori`, `penjual_idpenjual`),
  INDEX `fk_penjual_katagori_katagori1_idx` (`katagori_idkatagori` ASC) VISIBLE,
  INDEX `fk_penjual_katagori_penjual1_idx` (`penjual_idpenjual` ASC) VISIBLE,
  CONSTRAINT `fk_penjual_katagori_katagori1`
    FOREIGN KEY (`katagori_idkatagori`)
    REFERENCES `db_universitas`.`katagori` (`idkatagori`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_penjual_katagori_penjual1`
    FOREIGN KEY (`penjual_idpenjual`)
    REFERENCES `db_universitas`.`penjual` (`idpenjual`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb` ;

-- -----------------------------------------------------
-- Placeholder table for view `mydb`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `mydb`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`view1`;
USE `mydb`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
