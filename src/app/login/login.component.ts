import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    email : null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private router:Router    
    ) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password , email } = this.form;
    this.authService.login(username, password, email).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    this.router.navigate(["/"]) ;
  }
  doregister(){
    this.router.navigate(["/register"]) ;
  }
}