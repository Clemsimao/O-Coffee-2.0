import { sequelize } from "../../database/database.js";
import { Model, DataTypes } from "sequelize";

class Coffee extends Model {}

Coffee.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    reference: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    origine: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    prix_au_kilo: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    caracteristique_principale: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    disponible: {
        type : DataTypes.STRING(3),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Coffee',
    tableName: 'coffee',
    timestamps: false,
});

export default Coffee;