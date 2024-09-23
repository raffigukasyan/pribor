import {sequelize} from "../db";
import {DataTypes, ModelDefined, Optional} from "sequelize";

type OrderAttributes = {
    id: number,
    orderDate: Date
}

type OrderDefineAttributes = Optional<OrderAttributes, 'id'>;

export const Orders:ModelDefined<OrderAttributes, OrderDefineAttributes> = sequelize.define("orders", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    orderDate: {type: DataTypes.DATE, allowNull: false},
});
