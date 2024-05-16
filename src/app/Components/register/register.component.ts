import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  email: string = '';
  password: string = '';
  registerAsCompany: any;

  constructor(private auth: AuthService, private router : Router) {}

  

  Register() {

    if (this.email == '') {
      alert("Please Enter Email");
    }

    if (this.password == '') {
      alert("Please Enter Password");
    }

    this.auth.Register(this.email, this.password);

    this.email = '';
    this.password = '';
    
    if(this.registerAsCompany == true){
      this.router.navigate(['/login'])
    }

  }

}
