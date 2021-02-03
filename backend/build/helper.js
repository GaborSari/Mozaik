"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logQueries = require('./db/logQueries');
function log(str) {
    console.log('%s\t%s', new Date().toString(), String(str).toString());
    return true;
}
exports.log = log;
function _dbLog(type, content, from = 'nodejs') {
    logQueries.insert(type, content, from);
    return true;
}
exports._dbLog = _dbLog;
