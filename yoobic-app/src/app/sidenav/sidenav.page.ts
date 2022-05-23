import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {

  active = '';

  NAV = [
    {
      name:'Login',
      link: '/nav/login',
      icon: 'image-sharp'
    },
    {
      name: 'Heroes',
      link: '/nav/heroes',
      icon: 'image-sharp'
    },
    {
      name: 'Hero',
      link: '/nav/hero',
      icon: 'image-sharp'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
   }

  ngOnInit() {
  }

}
