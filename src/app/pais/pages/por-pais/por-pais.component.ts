import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { console.log(this.paises); }

  buscar() {
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises) => {
          console.log(paises);
          this.paises = paises;
        },
        error: (e) => {
          this.hayError = true;
          this.paises = [];
        }
      });
  }
}
