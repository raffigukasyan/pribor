import {Category, SubCategory, CategoryProduct} from "./Category";
import {Products, Characteristic} from "./Products";
import {Basket, BasketProduct} from "./Basket";
import {User} from "./User";
import {Orders} from "./Orders";

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



