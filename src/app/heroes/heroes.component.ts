import { Component, OnInit } from '@angular/core';
//  import the Hero class
import { Hero } from '../hero';
// import the mock HEROES.
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // object Hero
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // Add a heroes property to the class that exposes these heroes for binding.
  heroes = HEROES;


  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
