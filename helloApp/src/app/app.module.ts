import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompanyModule } from './company/company.module';

import { MyserviceService } from './myservice.service';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';


 
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor()
  { 
    console.log("hi this module");
 }
}