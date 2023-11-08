import { SharedModule } from './../shared/shared.module';
import { RouterModule, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { BycountryPageComponent } from './pages/bycountry-page/bycountry-page.component';
import { BycapitalPageComponent } from './pages/bycapital-page/bycapital-page.component';
import { ByregionPageComponent } from './pages/byregion-page/byregion-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BycountryPageComponent,
    BycapitalPageComponent,
    ByregionPageComponent,
    CountryPageComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule, FormsModule],
})
export class CountriesModule {}
