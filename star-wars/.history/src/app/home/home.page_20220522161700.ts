import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Tab1Page {

  constructor(
    private router: Router
  ) { }

  btnClicked() {
    console.log('btn Clicked');
    this.router.navigate(['tab2']);

  }

}