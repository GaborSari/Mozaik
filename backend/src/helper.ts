var logQueries = require('./db/logQueries');


function log(str: string) {
    console.log('%s\t%s', new Date().toString(), String(str).toString());
    return true;
}

function _dbLog(type: string, content: string, from = 'nodejs') {
    logQueries.insert(type, content, from);
    return true;
}

export {
    log,
    _dbLog  
}