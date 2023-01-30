-- MySQL Script generated by MySQL Workbench

-- Mon Jan 30 14:28:49 2023

-- Model: New Model    Version: 1.0

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @ @FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @ @SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------

-- Schema mydb

-- -----------------------------------------------------

-- -----------------------------------------------------

-- Schema new_db

-- -----------------------------------------------------

-- -----------------------------------------------------

-- Schema new_db

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `new_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

USE `new_db` ;

-- -----------------------------------------------------

-- Table `new_db`.`objet`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `new_db`.`objet` ;

CREATE TABLE
    IF NOT EXISTS `new_db`.`objet` (
        `id_objet` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(100) NOT NULL,
        `description` VARCHAR(45) NULL DEFAULT NULL,
        PRIMARY KEY (`id_objet`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------

-- Table `new_db`.`users`

-- -----------------------------------------------------

DROP TABLE IF EXISTS `new_db`.`users` ;

CREATE TABLE
    IF NOT EXISTS `new_db`.`users` (
        `id_user` INT NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(45) NOT NULL,
        `lastname` VARCHAR(45) NOT NULL,
        `email` VARCHAR(100) NOT NULL,
        `password` VARCHAR(100) NOT NULL,
        `id_objet` INT NULL DEFAULT NULL,
        PRIMARY KEY (`id_user`),
        INDEX `id_objet_idx` (`id_objet` ASC) VISIBLE,
        CONSTRAINT `id_objet` FOREIGN KEY (`id_objet`) REFERENCES `new_db`.`objet` (`id_objet`) ON DELETE
        SET NULL ON UPDATE
        SET
            NULL
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

SET SQL_MODE=@OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;