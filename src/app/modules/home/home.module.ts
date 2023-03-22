import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from 'src/app/Common/ang-material.module';
import { CommonApp } from 'src/app/Common/common-app.module';
import { TemplateOutletModule } from '../template-outlet/template-outlet.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CommonApp,
    TemplateOutletModule
  ],
  exports:[
    MaterialModule,
    CommonApp,
    TemplateOutletModule
  ]
})
export class HomeModule { }
