import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Hero, HEROES } from '../heroes';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})


export class HeroPage implements OnInit {

  hero: Hero | undefined;

  constructor(public router: Router) { }

  onReturn() {
    this.router.navigateByUrl('/heroes');
  }

  ngOnInit() {

  }

}
