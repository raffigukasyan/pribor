import {sequelize} from "../db";
import {DataTypes, Optional, ModelDefined} from "sequelize";

type BasketAttributes = {
    id: number
}

type BasketCreationAttributes = Optional<BasketAttributes, 'id'>

export const Basket:ModelDefined<BasketAttributes, BasketCreationAttributes> = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
});

export const BasketProduct:ModelDefined<BasketAttributes, BasketCreationAttributes> = sequelize.define("basket_products", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
});
