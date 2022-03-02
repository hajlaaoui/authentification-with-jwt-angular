import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmailEditorComponent } from 'angular-email-editor';
import { TokenStorageService } from '../_services/token-storage.service';
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
  constructor(private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router: Router
    ) { }
    
  ngOnInit(): void {
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
   data: any
  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent = new EmailEditorComponent;

  editorLoaded() {
    //const json; /* DESIGN JSON GOES HERE */
    this.emailEditor.loadDesign(sample);
  }
  
  exportHtml() {
    this.emailEditor.exportHtml((data) => console.log('exportHtml', data));
  }
  saveDesign() {
    this.emailEditor.saveDesign((design) => console.log('saveDesign', design));
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  }
