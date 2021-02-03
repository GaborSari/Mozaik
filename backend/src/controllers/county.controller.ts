import County from "../models/County";
import { Request, Response, Application } from 'express';

class _CountyController {
    constructor() {
    }

    getList(req: Request, res: Response) {
        County.list().subscribe((counties: Array<County>) => {
            res.send(counties);
        });
    };

    update(req: Request, res: Response) {
        let county = new County(req.body.id, req.body.name, req.body.deleted);
        if (!county.isValid()) {
            res.send(String(false));
            return;
        }
        county.update().subscribe((affected: number) => {
            res.send(String(affected));
        });
    };

    add(req: Request, res: Response) {
        if (!req.body.name) {
            res.send(String(false));
            return;
        }
        County.add(req.body.name).subscribe((insertedId: number) => {
            res.send(String(insertedId));
        });
    };


    delete(req: Request, res: Response) {
        let county = new County(req.body.id, req.body.name, new Date());
        if (!county.isValid()) {
            res.send(String(false));
            return;
        }
        county.update().subscribe((affected: number) => {
            res.send(String(affected));
        });
    };
}

let CountyController: _CountyController = new _CountyController();

export default CountyController;