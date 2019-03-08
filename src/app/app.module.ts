import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppComponent } from './app.component';
import { MatLibraryModule } from "./mat-library/mat-library.module";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppRoutingModule } from "./app-routing.module";

import { SidebarModule } from 'ng-sidebar';
import { AccordionModule } from 'ngx-accordion';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core'
import { AgmDirectionModule } from 'agm-direction'
import { WelcomeComponent } from "./welcome/welcome.component";
import { DesignComponent } from './design/design.component';
import { TemplateComponent } from './template/template.component';
import { HavmorComponent1 } from "./havmor1/havmor.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import {NgcFloatButtonModule} from 'ngc-float-button';
import { MainComponent } from './main/main.component';
import { AddRMAComponent } from './add-rma/add-rma.component'
import { TruncatePipe } from "./service/transform.pipe";
import { FormArrayComponent } from './form-array/form-array.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DesignComponent,
    TemplateComponent,
    HavmorComponent1,
    MainComponent,
    AddRMAComponent,
    TruncatePipe,
    FormArrayComponent
  ],
  imports: [
    HttpClientModule,


    BrowserModule,
    BrowserAnimationsModule,
    MatLibraryModule,
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    AppRoutingModule,
    NgcFloatButtonModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
      //apiKey: 'AIzaSyDzYaBnOA-xvnRKY_r72_a1Bl-sVTB0WD4'
    }),
    AgmDirectionModule,
    AccordionModule  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
