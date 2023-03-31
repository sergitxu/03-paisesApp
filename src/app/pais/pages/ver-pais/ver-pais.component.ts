import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
  ) { }

  ngOnInit(): void {

    //switchMap recoge un observable y envía otro.
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.PaisService.getPaisporId(id))
      )
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
