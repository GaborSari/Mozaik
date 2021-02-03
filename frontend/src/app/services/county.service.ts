import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { County } from '../models/County';
import { delay } from 'rxjs/internal/operators';

@Injectable()
export class CountyService {
    subscriptions: Subscription[] = [];
    counties: BehaviorSubject<Array<County>> = new BehaviorSubject<Array<County>>([]);

    errors:BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

    constructor(private http: HttpClient) {
        this.loadCounties();
    }

    loadCounties() {
        console.log('loadCounties...');
        this.http.get(environment.apiURL + '/county').pipe(
            delay(1000)
        ).subscribe((counties:any) => {
            if(!counties) return;
            console.log('get');
            let _counties = new Array<County>();
            for(let county of counties){
                _counties.push(new County(county.id,county.name,county.deleted));
            }
            this.counties.next(_counties);
        },(error)=>{
            console.error(error.message);
            this.errors.next(error);
        });
        return this.counties;
    }

    ngOnDestroy() {
        console.log(this.subscriptions.length);
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }

}
