import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { mostPopularJobs } from '../../mock-PopularJobs';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})

export class CompanyComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private sharedDataService: SharedDataService, private auth: AuthService){}

  popularJobs = mostPopularJobs;
  showSection1 = false;
  showSection2 = false;
  showSection3 = false;

  toggleSection(section: number) {
    if (section === 1) {
      this.showSection1 = true;
      this.showSection2 = false;
      this.showSection3 = false;
    } else if (section === 2) {
      this.showSection1 = false;
      this.showSection2 = true;
      this.showSection3 = false;
    } else if (section === 3) {
      this.showSection1 = false;
      this.showSection2 = false;
      this.showSection3 = true;
    }
  }

  Logout(){
    this.auth.logOut();
  }
}
