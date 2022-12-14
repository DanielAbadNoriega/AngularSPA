import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _HeroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._HeroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe', i]);
  }
}
