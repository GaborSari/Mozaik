import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component/app.component';
import { CountiesComponent } from './components/counties.component/counties.component';
import { CountyService } from './services/county.service';

@NgModule({
  declarations: [
    AppComponent,
    CountiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CountyService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
