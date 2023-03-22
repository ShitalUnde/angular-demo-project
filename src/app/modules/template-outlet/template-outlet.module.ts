import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateOutletRoutingModule } from './template-outlet-routing.module';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { MaterialModule } from 'src/app/Common/ang-material.module';


@NgModule({
  declarations: [
    TemplateOutletComponent
  ],
  imports: [
    CommonModule,
    TemplateOutletRoutingModule,
    MaterialModule
  ],
  exports:[
    TemplateOutletComponent,
    MaterialModule
  ]
})
export class TemplateOutletModule { }
