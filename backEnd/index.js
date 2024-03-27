require('dotenv').config();
const express = require('express');
const cors = require('cors');

const sequelize = require('./db.js');
const modules = require('./models/models');
const router = require('./routes/index');
const PORT = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(express.json());
app.use('/', router);

const start = async () => {
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

