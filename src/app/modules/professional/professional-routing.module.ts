import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalUserCreateFormComponent } from './professional-user-create-form/professional-user-create-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalListComponent,
    pathMatch:'full'
  },
  {
    path: 'add',
    component: ProfessionalUserCreateFormComponent,
    pathMatch:'full'

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalRoutingModule {}
