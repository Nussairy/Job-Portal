import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { mostPopularJobs } from './../../mock-PopularJobs';
import { SharedDataService } from '../../shared/shared-data.service';
import { Job } from '../../Job';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private sharedDataService: SharedDataService, private router: Router, private auth: AuthService) {}

  selectedJob: any;

  popularJobs = mostPopularJobs;

  isLoggedIn = this.sharedDataService.isLoggedIn;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');
    if (window.scrollY > 5) {
      this.renderer.addClass(navbar, 'navbar-scrolled');
    } else {
      this.renderer.removeClass(navbar, 'navbar-scrolled');
    }
  }

  search(): void {
    const inputValue = this.elementRef.nativeElement.querySelector('#search').value;
    this.sharedDataService.searchedJob = inputValue;
  }

  getJob(job: Job): void {
    if (this.sharedDataService.isLoggedIn == false) {
      alert("Please Login first");
    }
    else {
      this.selectedJob = job;
      this.sharedDataService.sharedJob = this.selectedJob;
      this.router.navigate(['/details']);
    }
  }

  Logout() {
    this.auth.logOut();
  }

}
