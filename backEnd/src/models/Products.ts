import {sequelize} from "../db";
import {DataTypes, ModelDefined, Optional} from "sequelize";

type ProductsAttributes = {
    id: number,
    name: string,
    description: string,
}

type ProductsDefineAttributes = Optional<ProductsAttributes, 'id'>;

export const Products:ModelDefined<ProductsAttributes, ProductsDefineAttributes> = sequelize.define("products", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

type CharacteristicAttributes = {
    id: number,
    name: string,
    description: string,
}

type CharacteristicDefineAttributes = Optional<CharacteristicAttributes, 'id'>;

export const Characteristic:ModelDefined<CharacteristicAttributes, CharacteristicDefineAttributes> = sequelize.define("characteristic", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})
