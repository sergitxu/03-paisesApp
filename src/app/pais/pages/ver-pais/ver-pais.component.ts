import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {


    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisporId(id))
      )
      .subscribe(paises => this.pais = paises[0]);


    //switchMap recoge un observable y envía otro.
    //   this.activatedRoute.params
    //     .pipe(
    //       switchMap(({ id }) => this.paisService.getPaisporId(id)),
    //       tap(console.log)
    //     )
    //     .subscribe(pais => this.pais = pais);
  }

}
