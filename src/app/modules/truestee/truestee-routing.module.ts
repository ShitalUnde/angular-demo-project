import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrusteeComponent } from './trustee/trustee.component';

const routes: Routes = [
  {
    path: '',
    component: TrusteeComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruesteeRoutingModule { }
