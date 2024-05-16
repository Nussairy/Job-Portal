import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})

export class JobDetailsComponent implements OnInit {

  job: any;

  constructor(private SharedDataService: SharedDataService, private router: Router) { }

  ngOnInit(): void {
    this.job = this.SharedDataService.sharedJob;
  }

  applyNow() {
    if (this.SharedDataService.isLoggedIn == false) {
      alert("Please Login First");
    }
    else
      this.router.navigate(['/apply']);
  }

}
