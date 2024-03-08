require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');
const PORT = process.env.PORT || 5000;

const app = express();

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

