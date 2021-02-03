import { config } from '../config/config';
import mysql2 from 'mysql2';
import { Subject } from 'rxjs';


class _Database {
    private connection: any = undefined;

    constructor(config: any) {
        config.namedPlaceholders = true;
        this.connection = mysql2.createConnection(config);
    }

    connect(): boolean {
        this.connection.connect((err: any) => {
            if (err) {
                throw new Error('Cannot connect to MySQL server ' + config.database.host);
            }
            console.log('Connected to the MySQL server.');
            return true;
        });
        return false;
    }

    run(query: string, params: Array<any> | Object): Subject<any> {
        let subject = new Subject<any>();
        //console.log(query, params);
        this.connection.execute(query, params,
            (error: any, result: any, fields: any) => {
                if (error) {
                    console.error(error, query, params);
                    subject.next(String(false));
                }
                subject.next(this.processResult(query, params, result));
            }
        );
        return subject;
    }

    private processResult(query: string, params: Array<any> | Object, result: any) {
        if (query.toLowerCase().includes('update')) {
            return result.affectedRows;
        }

        if (query.toLowerCase().includes('insert')) {
            return result.insertId;
        }

        return (result);
    }
}

let Database: _Database = new _Database(config.database);

export default Database;