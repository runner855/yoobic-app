import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HEROES } from '../heroes';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})

export class HeroesPage implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;
 

  


  constructor(private activatedRoute: ActivatedRoute) { }

  // onLearnMore(form: NgForm) {
  //   this.router.navigateByUrl('/hero')
  // }


  

  ngOnInit() {
     let id = this.activatedRoute.snapshot.paramMap.get('id');
     console.log(id);

  }

}
