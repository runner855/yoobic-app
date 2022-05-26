import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero, HEROES } from '../heroes';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})

export class HeroesPage implements OnInit {

  // heroes = HEROES;
  heroes: Hero[] = [];






  constructor(private heroService: HeroService) { }






  ngOnInit() {


  }



}
