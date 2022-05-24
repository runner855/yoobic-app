import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HEROES } from '../heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {

  heroes = HEROES;
  

  


  constructor(public router : Router) { }

  onLearnMore(form: NgForm) {
    this.router.navigateByUrl('/hero')
  }

  ngOnInit() {
  }

}
