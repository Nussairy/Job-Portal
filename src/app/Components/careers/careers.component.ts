import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../mock-jobs';
import { Job } from '../../Job';
import { SharedDataService } from '../../shared/shared-data.service';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})

export class CareersComponent implements OnInit {

  constructor(private SharedDataService: SharedDataService, private router: Router, public dataservice: DataService) { }

  jobs = Jobs;
  selectedRadioValue: any;
  filteredJobs: Job[] = [];
  searchedJobs: Job[] = [];
  joblist: Job[] = [];
  selectedJob?: Job;

  ngOnInit(): void {
    this.getAllJobs();
  }

  onChange(selectedRadioValue: any) {
    if (this.searchedJobs.length > 0) {
      this.searchedJobs = this.joblist.filter(job => {
        return (job.type === selectedRadioValue || job.setup === selectedRadioValue);
      });
    }
    else {
      this.filteredJobs = this.joblist.filter(job => {
        return (job.type === selectedRadioValue || job.setup === selectedRadioValue);
      });
    }
  }

  Reset(): void {
    this.selectedRadioValue = '';
    this.filteredJobs = this.joblist;
    this.searchedJobs = this.joblist;
  }

  viewDetails(job: Job): void {
    this.selectedJob = job;
    this.SharedDataService.sharedJob = this.selectedJob;
    this.router.navigate(['/details']);
  }

  getAllJobs() {
    this.dataservice.getAllJobs().subscribe((res: any) => {
      this.joblist = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      this.searchedJobs = this.joblist.filter(job => {
        return (job.title.toLowerCase() === this.SharedDataService.searchedJob.toLowerCase())
      })
    }, (err: any) => {
      alert('Error while fetching job data');
    })
  }

  applyNow(){
    if(this.SharedDataService.isLoggedIn == false)
      alert("Please Login First");
    else
      this.router.navigate(['/apply']);
  }

}