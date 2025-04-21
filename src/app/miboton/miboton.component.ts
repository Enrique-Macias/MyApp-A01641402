import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-miboton',
  templateUrl: './miboton.component.html',
  styleUrls: ['./miboton.component.css']
})
export class MibotonComponent {
  @Input() texto: string = 'Botón';
  @Input() color: string = 'primary';
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    this.clickEvent.emit();
  }
}
