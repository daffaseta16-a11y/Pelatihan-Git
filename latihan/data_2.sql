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
-- -----------------------------------------------------
-- Schema db_universitas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_universitas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_universitas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

USE `db_universitas` ;


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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
