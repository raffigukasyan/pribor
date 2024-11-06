import {DataTypes, ModelDefined, Optional} from "sequelize";
import {sequelize} from "../db";

type UserAttributes = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>

export const User:ModelDefined<UserAttributes, UserCreationAttributes> =  sequelize.define("users", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING,},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    role: {type:DataTypes.STRING, defaultValue: "USER"}
})