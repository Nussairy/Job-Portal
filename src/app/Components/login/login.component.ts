import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { SharedDataService } from '../../shared/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  email: string = '';
  password: string = '';
  logInAsCompany: any;

  constructor(private auth: AuthService, private sharedData: SharedDataService, private router: Router) { }

  login() {

    if (this.email == '') {
      alert("Please Enter Email");
      return;
    }

    if (this.password == '') {
      alert("Please Enter password");
      return;
    }

    this.auth.Login(this.email, this.password);

    this.email = '';
    this.password = '';
    this.sharedData.isLoggedIn = true;

    if (this.logInAsCompany == true) {
      this.router.navigate(['/company']);
    }
    else
      this.router.navigate(['/']);
  }

}
