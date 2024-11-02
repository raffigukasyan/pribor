import {Dialect, Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize  =  new Sequelize(process.env.DATABASE_NAME as string, process.env.DATABASE_USERNAME as string, process.env.DATABASE_PASSWORD as string, {
    dialect: 'mysql' as Dialect,
    host: process.env.DATABASE_HOST as string,
});