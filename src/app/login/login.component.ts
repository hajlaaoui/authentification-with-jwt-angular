import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserManagementService } from '../_services/user-management.service';
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
  @Input()
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username:string |undefined
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private router:Router ,private userservice:UserManagementService   
    ) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.userservice.getByUsername().subscribe(data => {
        this.username = data.username
        console.log(this.username);
     
        
       });
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
    
    this.router.navigateByUrl("/mod") ;
    window.location.reload()
  }
  doregister(){
    this.router.navigate(["/register"]) ;
  }
}