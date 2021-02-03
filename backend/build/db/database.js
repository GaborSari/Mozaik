"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
var mysql = require('mysql2');
class _Database {
    constructor(config) {
        this.connection = undefined;
        config.namedPlaceholders = true;
        this.connection = mysql.createConnection(config);
    }
    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Cannot connect to MySQL server');
                console.error('error: ' + err.message);
                return false;
            }
            console.log('Connected to the MySQL server.');
            return true;
        });
        return false;
    }
    run(query, params) {
        return new Promise((resolve, reject) => {
            this.connection.execute(query, params, function (err, results, fields) {
                if (err) {
                    console.log(err, query, params);
                    reject(err);
                }
                resolve(results); // results contains rows returned by server
            });
        });
    }
}
let Database = new _Database(config_1.config.database);
exports.default = Database;
