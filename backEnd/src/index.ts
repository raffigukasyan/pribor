import dotenv from 'dotenv';
import express, {Express} from 'express';
import cors from "cors";

import {sequelize} from "./db";

// const router = require('./routes');

dotenv.config();
console.log(process.env.DATABASE_NAME, 'qqqq');
const PORT: string | number = process.env.PORT || 5000;

const app:Express = express();


app.use(cors());
app.use(express.json());
// app.use('/', router);

const start = async ():Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log('SERVER START', PORT)
        });
        console.log('Connection successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start();

