import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-byregion-page',
  templateUrl: './byregion-page.component.html',
  styleUrls: ['./byregion-page.component.css'],
})
export class ByregionPageComponent {
  public regiones: Country[] = [];

  constructor(private regionService: CountryService) {}
  muestraRegion(value: string) {
    this.regionService.buscarRegion(value).subscribe((m) => {
      this.regiones = m;
    });
  }
}
