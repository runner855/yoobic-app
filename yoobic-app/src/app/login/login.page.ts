import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router) { }

  onLogin(form: NgForm) {
    this.router.navigateByUrl('/heroes')
  }



  ngOnInit() {
  }

}
