import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent {
  @Input() placeholder: string = '';

  @Output() onEvent = new EventEmitter<string>();

  buscar(value: string) {
    this.onEvent.emit(value);
  }
}
