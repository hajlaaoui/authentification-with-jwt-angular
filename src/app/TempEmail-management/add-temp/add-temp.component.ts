import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmailEditorComponent, EmailEditorService } from 'angular-email-editor';
import { TempemailService } from 'src/app/_services/tempemail.service';
import * as sample from "./sample.json";


@Component({
  selector: 'app-add-temp',
  templateUrl: './add-temp.component.html',
  styleUrls: ['./add-temp.component.scss']
})
export class AddTempComponent implements OnInit {
  errorMessage = '';
  isSuccessful = false;
  code: any;
  editorResult: any;

  constructor(private tempEmailService:TempemailService,private router:Router) { }
  form: any = {
    roleName: null,
    roleDescription: null
    
  };

  onSubmit(): void {
    const { jsonorHtmlData} = this.form;
  
  }


  ngOnInit(): void {
  }
  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent = new EmailEditorComponent;

  editorLoaded() {
    //const json; /* DESIGN JSON GOES HERE */
    var design = sample ;
    this.emailEditor.loadDesign(design);
  }

  exportHtml() {
    this.emailEditor.exportHtml((data:any) => 
      this.tempEmailService.addTemp(JSON.stringify(data.design)).subscribe()
     );
  
    this.refresh();
  }
  saveDesign() {
    this.emailEditor.saveDesign((design) => console.log('saveDesign', design));
  }
  refresh(): void {
    window.location.reload();
  }

}
