import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})

export class HeroesPage implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;





  constructor() { }

  // onLearnMore(form: NgForm) {
  //   this.router.navigateByUrl('/hero')
  // }




  ngOnInit() {


  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

}
