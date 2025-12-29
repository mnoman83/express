import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define("Product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        short_description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: 'product',
        timestamps: true
    }   
);

export default Product;