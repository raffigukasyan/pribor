import {sequelize} from "../db";
import {DataTypes, ModelDefined, Optional} from "sequelize";

type CategoryAttributes = {
    id: number;
    name: string;
    image: string;
}

type CategoryDefineAttributes = Optional<CategoryAttributes, 'id' | 'image'>;

export const Category:ModelDefined<CategoryAttributes, CategoryDefineAttributes> = sequelize.define("categories", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
});

export const SubCategory:ModelDefined<CategoryAttributes, CategoryDefineAttributes> = sequelize.define("sub_category", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
});


type CategoryProductAttributes = {
    id: number;
}

type CategoryProductDefineAttributes = Optional<CategoryProductAttributes, 'id'>;

export const CategoryProduct:ModelDefined<CategoryProductAttributes, CategoryProductDefineAttributes> = sequelize.define("category_product", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
});