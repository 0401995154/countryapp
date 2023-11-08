import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BycapitalPageComponent } from './pages/bycapital-page/bycapital-page.component';
import { BycountryPageComponent } from './pages/bycountry-page/bycountry-page.component';
import { ByregionPageComponent } from './pages/byregion-page/byregion-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: BycapitalPageComponent,
  },
  {
    path: 'by-country',
    component: BycountryPageComponent,
  },
  {
    path: 'by-region',
    component: ByregionPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
