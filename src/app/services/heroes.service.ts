import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    {
      img: 'assets/img/demonHunter.jpg',
      classHeroe: 'Demon Hunter',
      description:
        "Demon Hunters are the game's bow archetype class. They excel at ranged damage dealing with both good AoE and single target options. Demon Hunters use One-Handed Bows in both their weapon slot and their off-hand slot. When Legendary items drop.",
      history: '',
    },
    {
      img: 'assets/img/barbarian.jpg',
      classHeroe: 'Barbarian',
      description:
        'Barbarian is a playable class in Diablo Immortal, they are savage wanderers and mighty weapon experts. Survivors of the disaster that struck Mount Arreat, Barbarians use powerful weapons and brutal attacks to crush any opposition.',
      history: '',
    },
    {
      img: 'assets/img/magician.jpg',
      classHeroe: 'Magician',
      description:
        'Magician is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ipsum non nisl porta pharetra. Suspendisse libero mauris, tristique elementum.',
      history: '',
    },
    {
      img: 'assets/img/monk.jpg',
      classHeroe: 'Monk',
      description:
        'Monk is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ipsum non nisl porta pharetra. Suspendisse libero mauris, tristique elementum.',
      history: '',
    },
    {
      img: 'assets/img/necromancer.jpg',
      classHeroe: 'Necromancer',
      description:
        'Necromancer is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ipsum non nisl porta pharetra. Suspendisse libero mauris, tristique elementum.',
      history: '',
    },
    {
      img: 'assets/img/paladin.jpg',
      classHeroe: 'Paladin',
      description:
        'Paladin is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ipsum non nisl porta pharetra. Suspendisse libero mauris, tristique elementum.',
      history: '',
    },
  ];

  constructor() {
    console.log('Heroes Service!');
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(i: number): Heroe {
    return this.heroes[i];
  }
}

//creamos una interfaz con el tipo de array que va a ser y lo incluimos arriba,
//exportamos la interface para que el tipo se pueda usar en el resto de componentes
export interface Heroe {
  img: string;
  classHeroe: string;
  description: string;
  history: string;
}
