import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    //De esta manera retornamos ":id" o los parámetros que se estén pasando en este momento
    this.activatedRoute.params.subscribe(
      (params):Heroe =>
        //sabemos que recibe ":id"
        (this.heroe = this._heroesService.getHeroe(params['id']))
    );
  }



  ngOnInit(): void {}
}
