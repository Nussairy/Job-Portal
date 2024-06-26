import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  Login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  Register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Register Successful");
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }

  logOut() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

}
