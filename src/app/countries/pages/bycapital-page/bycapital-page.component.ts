import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bycapital-page',
  templateUrl: './bycapital-page.component.html',
  styleUrls: ['./bycapital-page.component.css'],
})
export class BycapitalPageComponent {
  busca(valor: string) {
    console.log(valor);
  }
}
