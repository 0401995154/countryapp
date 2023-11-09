import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-bycountry-page',
  templateUrl: './bycountry-page.component.html',
  styleUrls: ['./bycountry-page.component.css'],
})
export class BycountryPageComponent {
  public paises: Country[] = [];

  constructor(private pService: CountryService) {}

  mostrarPais(value: string) {
    this.pService.buscarPais(value).subscribe((m) => (this.paises = m));
  }
}
