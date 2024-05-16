import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../../evironments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CareersComponent } from './Components/careers/careers.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';
import { CompanyComponent } from './Components/company/company.component';
import { EditprofileComponent } from './Components/editprofile/editprofile.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { JobApplyComponent } from './Components/job-apply/job-apply.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CareersComponent,
    JobDetailsComponent,
    CompanyComponent,
    ProfileComponent,
    EditprofileComponent,
    JobApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp({"projectId":"job-portal-b96b6","appId":"1:28040675337:web:a2ffd5c5378d0e39b778d8","storageBucket":"job-portal-b96b6.appspot.com","apiKey":"AIzaSyBRZ6kpY6rqG4vPtSqoszJkVM_-njf03Uk","authDomain":"job-portal-b96b6.firebaseapp.com","messagingSenderId":"28040675337"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
