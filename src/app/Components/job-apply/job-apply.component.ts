import { Component } from '@angular/core';
import { User } from '../../user';
import { Applicants } from '../../applicants';
import { DataService } from '../../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrl: './job-apply.component.css'
})

export class JobApplyComponent {

  user! :User;
  job: any;
  
  constructor(private dataservice:DataService,private router:Router) {}

  applyJob() {
    // Check if user and job details are available
    if (this.user && this.job) {
      // Create a new Applicants object
      const newApplicant: Applicants = {
        id: '', // You may set this if necessary
        companyemail: this.job.email,
        jobtitle: this.job.title,
        useremail: this.user.email,
        username: this.user.firstName,
        usersphonre: this.user.phone,
        userskills: this.user.skills,
        usereducation: this.user.education,
        userexperiences: this.user.experiences,
        status: '' // You may set this to a default value if necessary
      };
  
      // Add the new applicant
      this.dataservice.addApplicants(newApplicant)
        .then(() => {
          console.log('Applicant added successfully');
          // Redirect to careers page or any other page as needed
          this.router.navigate(['/careers']);
        })
        .catch(error => {
          console.error('Error adding applicant:', error);
        });
    } else {
      console.error('User or job details not available');
    }
  }

}
