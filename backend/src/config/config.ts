const databaseName = 'demo';
const databasePassword = '';
const databaseUser = 'root';
const databaseHost = '127.0.0.1';


const database = {
    host: databaseHost,
    user: databaseUser,
    password: databasePassword,
    database: databaseName
}

const serverPort = 3000;

const sessionSecret = 'Rx5w4A=NDL%L+55+?m%ytNWH^kq_EPByNSrQXG_9MX%mRNp3^q';

const sessionOptions =
{
    cookie: {
        httpOnly: true,
        
        secure: false,
        maxAge: 1000 * 60 * 60 * 24, //1d
    },
    secret: sessionSecret,
}


const config = {
    serverPort,
    database,
    sessionOptions
}

export { config };