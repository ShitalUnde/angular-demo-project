import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruesteeRoutingModule } from './truestee-routing.module';
import { TrusteeComponent } from './trustee/trustee.component';
import { MaterialModule } from 'src/app/Common/ang-material.module';
import { CommonApp } from 'src/app/Common/common-app.module';


@NgModule({
  declarations: [
    TrusteeComponent
  ],
  imports: [
    CommonModule,
    TruesteeRoutingModule,
    MaterialModule,
    CommonApp
  ],
  exports:[
    MaterialModule,
    CommonApp
  ]
})
export class TruesteeModule { }
