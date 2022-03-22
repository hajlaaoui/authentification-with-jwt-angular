import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmailEditorComponent } from 'angular-email-editor';
import { RoleManagementService } from '../_services/role-management.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserManagementService } from '../_services/user-management.service';
import { UserService } from '../_services/user.service';
import * as sample from "./sample.json";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  content?: string;
  isLoggedIn = false;
  username : string | any;
  constructor(private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private usermanagementservice: UserManagementService,
    private roleservice : RoleManagementService
    ) { }
    
  ngOnInit(): void {

    this.usermanagementservice.getByUsername().subscribe(data => {
      this.username = data.username
      console.log(this.username);
      
     });
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.isLoggedIn);
    
    if (!this.isLoggedIn) {
      this.router.navigate(['/login'])
    }
    // this.userService.getPublicContent().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );  
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
 
  }
