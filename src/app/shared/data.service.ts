import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Job } from '../Job';
import { User } from '../user';
import { Observable, map, take } from 'rxjs';
import { Applicants } from '../applicants';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }
  private companyemail: string = '';
  private userEmail: string = '';

  setCompanyemail(email: string): void {
    this.companyemail = email;
  }

  getCompanyemail(): string {
    return this.companyemail;
  }
  
  setUserEmail(email: string): void {
    this.userEmail = email;
  }

  getUserEmail(): string {
    return this.userEmail;
  }
  public addjobs(job: Job) {
    job.id = this.afs.createId();
    return this.afs.collection('/Job').add(job);
  }

  getAllJobsByCompany(companyId: string) {
    return this.afs.collection('/Job').doc(companyId).collection('CompanyJobs').snapshotChanges();
  }

  getAllJobs() {
    return this.afs.collection('/Job').snapshotChanges();
  }
  public deleteJob(job: Job) {
    return this.afs.doc('/Job/' + job.id).delete();
  }

  updateJob(job: Job) {
    this.deleteJob(job);
    this.addjobs(job);
  }

  public addUser(user: User) {
    user.id = this.afs.createId();
    return this.afs.collection('/User').add(user);
  }

  public deleteUser(user: User) {
    return this.afs.doc('/User/' + user.id).delete();
  }

  updateUser(user: User) {
    this.deleteUser(user);
    this.addUser(user);
  }

  getUserByEmail(email: string): Observable<User | null> {
    return this.afs.collection<User>('users', ref => ref.where('email', '==', email).limit(1))
      .valueChanges({ idField: 'id' }).pipe(
        map(users => users.length > 0 ? users[0] : null)
      );
  }

  getAllUser() {
    return this.afs.collection('/User').snapshotChanges();
  }

  public addApplicants(applicants: Applicants) {
    applicants.id = this.afs.createId();
    return this.afs.collection('/applicants').add(applicants);
  }

  getAllApplicants() {
    return this.afs.collection('/applicants').snapshotChanges();
  }

  updateApplicantStatus(applicantId: string, newStatus: string) {
    return this.afs.collection('/applicants').doc(applicantId).update({ status: newStatus });
  }

}

