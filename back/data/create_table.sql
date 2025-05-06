BEGIN;

-- Supprime la table coffee si elle existe déjà pour éviter les doublons
DROP TABLE IF EXISTS "coffee";

-- Définir l'encodage client à UTF-8
SET client_encoding TO 'UTF8';

-- Créer la table coffee
CREATE TABLE coffee (
    "id" SERIAL PRIMARY KEY,
    "nom" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "reference" VARCHAR(50) NOT NULL UNIQUE,
    "origine" VARCHAR(100) NOT NULL,
    "prix_au_kilo" DECIMAL(5, 2) NOT NULL,
    "caracteristique_principale" VARCHAR(50) NOT NULL,
    "disponible" VARCHAR(3) NOT NULL
);

COMMIT;