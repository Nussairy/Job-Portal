import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';
import { SharedDataService } from '../../shared/shared-data.service';
import { DataService } from '../../shared/data.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService,
    public dataservice:DataService, private router: Router,private auth: AuthService) {}

  user1: User | undefined;
  userList :User[]=[];
  userEmail: string = ''; 
  // Set the email of the user you want to retrieve
  loading: boolean = true;
  error: string | null = null;
  
  
  
   
  ngOnInit(): void {
    this.userEmail = this.dataservice.getCompanyemail();

    // Check if the userEmail is empty
    if (this.userEmail === '') {
      console.error('User email not found');
      return;
    }

    // Call getAllUser() to fetch user data
    this.getAllUser();
}

  
getAllUser() {
  this.dataservice.getAllUser().subscribe((res: any) => {
    this.userList = res.map((e: any) => {
      const data = e.payload.doc.data();
      data.id = e.payload.doc.id;
      return data;
    });

    for (const user of this.userList) {
      if (user.email === this.userEmail) {
        this.user1 = user;
        this.sharedDataService.setUserinfo(this.user1);
        break;
      }
    }
  }, (err: any) => {
    console.error('Error while fetching user data:', err);
  });
}

  editProfile(): void {
    this.router.navigate(['/editprofile']);
  }
  logout(){
    this.auth.logOut();
   }
   careers(){
    this.router.navigate(['/careers']);
   }
}
