import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CareersComponent } from './Components/careers/careers.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';
import { CompanyComponent } from './Components/company/company.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { JobApplyComponent } from './Components/job-apply/job-apply.component';
import { EditprofileComponent } from './Components/editprofile/editprofile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'details', component: JobDetailsComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'apply', component: JobApplyComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'editprofile', component: EditprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
