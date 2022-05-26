import { Injectable } from '@angular/core';
import { HEROES } from './heroes';
import { Hero } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
