import { Component } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { DataService } from '../../shared/data.service';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {
  constructor(private sharedDataService: SharedDataService,
    public dataservice: DataService, private router: Router) { }

  user1: User | undefined;
  userList: User[] = [];
  userEmail: string = ''; // Set the email of the user you want to retrieve
  loading: boolean = true;
  error: string | null = null;
  id: any;
  firstName: string = '';
  lastName: string = '';
  gender: string = '';
  status: String = '';
  birthday: String = '';
  age: string = '';
  address: string = '';
  phone: string = '';
  email: string = '';
  skills: string = '';
  education: string = '';
  experiences: string = '';
  userobj: User = {
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    status: '',
    birthday: '',
    age: '',
    address: '',
    phone: '',
    email: '',
    skills: '',
    education: '',
    experiences: '',

  }

  ngOnInit(): void {
    this.userEmail = this.dataservice.getCompanyemail();
    this.getUserByEmail();

  }

  getUserByEmail() {
    this.dataservice.getAllUser().subscribe((res: any) => {
      this.userList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });

      // Clear companyjobs list before populating it

      // Iterate over joblist
      for (const user of this.userList) {
        // Check if details is empty
        if (user.email === this.userEmail) {
          // If details is empty, add job to companyjobs
          this.user1 = user;
        }
      }
    }, (err: any) => {
      console.error('Error while fetching job data:', err);
    });
  }



  updateuser() {
    if (this.firstName == '' || this.lastName == '' || this.gender == '' || this.address == '' || this.birthday == '' || this.age == '' || this.experiences == '' || this.education == '' || this.skills == '' || this.phone == '') {
      alert("fill all input fields ");
      return;
    }
    console.error('user 1');
    this.userobj.id = '';
    this.userobj.firstName = this.firstName;
    this.userobj.lastName = this.lastName;
    this.userobj.gender = this.gender;
    this.userobj.status = this.status;
    this.userobj.birthday = this.birthday;
    this.userobj.age = this.age;
    this.userobj.address = this.address;
    this.userobj.phone = this.phone;
    this.userobj.skills = this.skills;
    this.userobj.education = this.education;
    this.userobj.experiences = this.experiences;
    this.userobj.email = this.userEmail;
    this.dataservice.addUser(this.userobj);
    this.dataservice.updateUser(this.userobj);

    this.router.navigate(['/profile']);
  }
  cancel() {
    this.router.navigate(['/profile']);
  }
  careers() {
    this.router.navigate(['/careers']);
  }

}
