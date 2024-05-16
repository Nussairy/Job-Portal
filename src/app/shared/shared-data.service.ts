import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})

export class SharedDataService {

  isLoggedIn?: boolean;

  sharedJob: any;

  searchedJob: any;
  sharedEmail: string = '';

  user!: User;

  constructor() { }

  setUserinfo(user: User) {
    this.user = user;
  }

  getUserInfo(): User {
    return this.user;
  }

}