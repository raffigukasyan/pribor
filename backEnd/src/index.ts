import dotenv from 'dotenv';
import express, {Express} from 'express';
import cors from "cors";

import {sequelize} from "./db";
import {init} from "./models/models";
import {errorHandler} from "./middleware/ErrorHandlingMiddleware";
import fileUpload from 'express-fileupload';
import router from "./routes/index"

dotenv.config();
console.log(process.env.DATABASE_NAME, 'qqqq');
const PORT: string | number = process.env.PORT || 5000;

const app:Express = express();


app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);
 // обработка ошибок
app.use(errorHandler)
const start = async ():Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        init();
        app.listen(PORT, () => {
            console.log('SERVER START', PORT)
        });
        console.log('Connection successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

start();

