"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require('../config/config');
class County {
    constructor() {
        this.id = -1;
    }
    static getHeadcount() {
        return 'Employee.headcount';
    }
}
exports.default = County;
