
// NodeJS.Require = require;
import mysql from 'mysql2';
import express from 'express';
import AppRoutes from './routes/AppRoutes/index.js';
import cors from 'cors';
//import md5 from 'md5';

import bodyParser from "body-parser";
import DotEnv from "dotenv";

DotEnv.config();
console.log(DotEnv.config());
const app = express();
const port = 4500;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use('/api', AppRoutes());

app.get('/', (req, res) => {
   res.send('nothing here');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});