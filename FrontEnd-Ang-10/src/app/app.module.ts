import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AjourCarComponent } from './component/ajour-car/ajour-car.component';
import { ListCarComponent } from './component/list-car/list-car.component';


@NgModule({
  declarations: [
    AppComponent,
   
    AjourCarComponent,
    ListCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
  
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
