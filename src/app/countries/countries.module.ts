import { RouterModule,RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { BycountryPageComponent } from './pages/bycountry-page/bycountry-page.component';
import { BycapitalPageComponent } from './pages/bycapital-page/bycapital-page.component';
import { ByregionPageComponent } from './pages/byregion-page/byregion-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [
    BycountryPageComponent,
    BycapitalPageComponent,
    ByregionPageComponent,
    CountryPageComponent,
    PruebaComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
