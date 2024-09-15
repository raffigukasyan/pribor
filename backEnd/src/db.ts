import {Dialect, Sequelize} from 'sequelize';


export const sequelize  =  new Sequelize(process.env.DATABASE_NAME as string, process.env.DATABASE_USERNAME as string, process.env.DATABASE_PASSWORD, {
    dialect: 'mysql' as Dialect,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) as number,
});