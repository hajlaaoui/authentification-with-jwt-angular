import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, email, password } = this.form;
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.redirecttologin();
      },
      err => {
        this.errorMessage = err.message;
        this.isSignUpFailed = true;
      }
    );
  }
  redirecttologin(){
    this.router.navigate(['/login'])
  }
}