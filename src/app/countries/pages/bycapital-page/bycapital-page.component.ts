import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-bycapital-page',
  templateUrl: './bycapital-page.component.html',
  styleUrls: ['./bycapital-page.component.css'],
})
export class BycapitalPageComponent {
  public paises: Country[] = [];

  constructor(private capital: CountryService) {}
  busca(valor: string) {
    this.capital.buscarCapital(valor).subscribe((m) => {
      this.paises = m;
    });
  }
}
