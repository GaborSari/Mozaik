import { Component } from '@angular/core';
import { County } from 'src/app/models/County';
import { CountyService } from 'src/app/services/county.service';

@Component({
  selector: 'counties',
  templateUrl: './counties.component.html',
})
export class CountiesComponent {
  counties: Array<County> = new Array<County>();
  loading = true;

  constructor(private countyService: CountyService) {
    this.countyService.counties.subscribe(counties => {
      this.counties = counties;
      if (this.counties.length)
        this.loading = false;
    });
  }

  reload() {
    this.loading = true;
    this.countyService.loadCounties();
  }
}
