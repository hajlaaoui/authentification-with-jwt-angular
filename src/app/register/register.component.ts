import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { UserManagementService } from '../_services/user-management.service';
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
  listRole: any;
  code: any;
  constructor(
    private authService: AuthService,
    private router:Router,
    private user:UserManagementService,
    private activerout:ActivatedRoute
    ) { }
  ngOnInit(): void {
    if(this.activerout.snapshot.queryParams.code){
      this.code=this.activerout.snapshot.queryParams.code
      this.user.getUserById(this.code).subscribe(data=>{
        console.log(data);
        this.form.email=data.email;
        this.form.username=data.username;
        
      })
    }
    this.user.getRole().subscribe(e=>{
      this.listRole=e
    })
    
    
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
  onSave(){
    console.log("click save", this.form);
    
  }
}