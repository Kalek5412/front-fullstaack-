import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
   
    HttpClientModule,
    FormsModule
],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }
