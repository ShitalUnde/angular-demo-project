import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalUserCreateFormComponent } from './professional-user-create-form/professional-user-create-form.component';
import { MaterialModule } from 'src/app/Common/ang-material.module';
import { CommonApp } from 'src/app/Common/common-app.module';

import { ProfessionalListComponent } from './professional-list/professional-list.component';

@NgModule({
  declarations: [ ProfessionalUserCreateFormComponent, ProfessionalListComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    MaterialModule,
    CommonApp
    ],
  exports:[CommonApp,MaterialModule]
})
export class ProfessionalModule { }
