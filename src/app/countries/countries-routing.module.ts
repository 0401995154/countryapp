import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BycapitalPageComponent } from './pages/bycapital-page/bycapital-page.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    component: PruebaComponent,
  },
  {
    path: 'a',
    component: BycapitalPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
