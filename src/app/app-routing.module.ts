import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'professional',
    loadChildren: () =>
      import('./modules/professional/professional.module').then(
        (m) => m.ProfessionalModule
      ),
  },
  {
    path: 'trustee',
    loadChildren: () =>
      import('./modules/truestee/truestee.module').then(
        (m) => m.TruesteeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
