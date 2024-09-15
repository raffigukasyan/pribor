import {sequelize} from "../db";

import {DataTypes} from "sequelize";

const User= sequelize.define("users", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING,},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    role: {type:DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
});

const BasketProduct = sequelize.define("basket_products", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
});

const Category = sequelize.define("categories", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
});

const SubCategory = sequelize.define("sub_category", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
});

const CategoryProduct = sequelize.define("category_product", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
});

const Products = sequelize.define("products", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const Characteristic = sequelize.define("characteristic", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Orders = sequelize.define("orders", {
    id: {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
    orderDate: {type: DataTypes.DATE, allowNull: false},
});

Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);


Products.hasMany(Characteristic);
Characteristic.belongsTo(Products);

Products.belongsToMany(Category, {through: CategoryProduct});
Category.belongsToMany(Products, {through: CategoryProduct});

Products.belongsToMany(SubCategory, {through: CategoryProduct});
SubCategory.belongsToMany(Products, {through: CategoryProduct});

Products.hasMany(Characteristic);
Characteristic.belongsTo(Products);

Products.hasMany(BasketProduct);
BasketProduct.belongsTo(Products);

User.hasOne(Basket);
Basket.belongsTo(User);


Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

User.hasMany(Orders);
Orders.belongsTo(User);

Basket.hasMany(Orders);
Orders.belongsTo(Basket);


export {
    User,
    Basket,
    BasketProduct,
    Category,
    SubCategory,
    CategoryProduct,
    Products,
    Characteristic,
    Orders
}

