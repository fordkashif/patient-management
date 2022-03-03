import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles:string[] = [];
  isLoggedIn = false;
  showDoctorBoard = false;
  showPatientBoard = false;
  username?: string;
  title = 'patient-management-test';

  constructor(private tokenStorageService: TokenStorageService) { }
  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showDoctorBoard = this.roles.includes('ROLE_DOCTOR');
      this.showPatientBoard = this.roles.includes('ROLE_PATIENT');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
