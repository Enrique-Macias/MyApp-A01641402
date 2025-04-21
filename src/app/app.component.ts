import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MibotonComponent } from './miboton/miboton.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MibotonComponent, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  contador: number = 0;
  mostrarTexto: boolean = false;
  mensaje: string = '';

  // Nueva lista de elementos
  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  nuevoElemento: string = '';

  incrementarContador() {
    this.contador++;
    this.actualizarMensaje();
  }

  decrementarContador() {
    this.contador--;
    this.actualizarMensaje();
  }

  private actualizarMensaje() {
    this.mostrarTexto = this.contador !== 0;
    if (this.contador > 0) {
      this.mensaje = '¡El contador es mayor que 0!';
    } else if (this.contador < 0) {
      this.mensaje = '¡El contador es menor que 0!';
    }
  }

  // Nuevo método para agregar elementos
  agregarElemento() {
    if (this.nuevoElemento.trim()) {
      this.elementos.push(this.nuevoElemento);
      this.nuevoElemento = '';
    }
  }
}
