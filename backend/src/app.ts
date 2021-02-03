
import express, { Request, Response, Application } from "express";
import { config } from "./config/config";
import Database from "./db/database";
import routes from './routes';
const cors = require('cors');
Database.connect();

var app: Application = express();
 
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(config.serverPort, 'localhost', () => {
    console.log('Server Started at Port ' + config.serverPort)
});