import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { DELETE_COUNTY, GET_COUNTIES, INSERT_COUNTY, UPDATE_COUNTY } from '../db/county.queries';
import Database from '../db/database';

class County {

    private id: number;
    private name: string;
    private deleted: Date | null = null;

    constructor(id: number, name: string, deleted: Date | null) {
        this.id = Number(id);
        this.name = String(name);
        if (deleted != null)
            this.deleted = new Date(deleted);
    }



    public getName() {
        return this.name;
    }


    public static list() {
        return Database.run(GET_COUNTIES, []).pipe(
            map(result => {
                let counties = new Array<County>();
                for (let county of result) {
                    counties.push(new County(county.id, county.name, county.deleted_at));
                }
                return counties;
            }));
    }

    public static add(name: string) {
        return Database.run(INSERT_COUNTY, { name: name, deleted: null }).pipe(
            map(result => {
                return result;
            }));
    }



    public update() {
        return Database.run(UPDATE_COUNTY, this).pipe(
            map(result => {
                return result;
            }));
    }

    public delete() {
        return Database.run(DELETE_COUNTY, { id: this.id }).pipe(
            map(result => {
                return result;
            }));
    }

    isValid() {
        return Number.isInteger(this.id) && this.id > 0 && this.name.trim().length > 0;
    }
}

export default County;