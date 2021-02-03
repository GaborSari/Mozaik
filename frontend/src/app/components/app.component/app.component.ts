import { Component } from '@angular/core';
import { County } from 'src/app/models/County';
import { CountyService } from 'src/app/services/county.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mozaik';
  height = window.innerHeight * 0.8;

  errors:Array<any> = new Array<any>();

  constructor(private countyService: CountyService) {
    this.countyService.errors.subscribe((error: any) => {
      
      if (error)
        this.errors.push(error);
        console.log(error,this.errors);
    });
  }

}
