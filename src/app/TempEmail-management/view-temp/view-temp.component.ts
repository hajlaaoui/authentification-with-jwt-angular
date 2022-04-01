import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-view-temp',
  templateUrl: './view-temp.component.html',
  styleUrls: ['./view-temp.component.scss']
})
export class ViewTempComponent implements OnInit {
  prams1 : string | any

  constructor(private route: ActivatedRoute) {
    this.prams1=this.route.snapshot.queryParams.code; 
     console.log(this.prams1)
   }

  ngOnInit(): void {
  }
  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent = new EmailEditorComponent;
  editorLoaded() {
    try {
     //const json; /* DESIGN JSON GOES HERE */
     var json = JSON.parse(this.prams1);
     console.log("josndata"+ json);
     
     this.emailEditor.loadDesign(json);
    } catch (err:any) {
      // 👇️ This runs
      console.log('Error: ', err.message);
    }

  }
  

}
