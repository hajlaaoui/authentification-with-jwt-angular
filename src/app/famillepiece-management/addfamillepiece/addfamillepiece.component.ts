import { Component, OnInit } from '@angular/core';
import { FamillepieceService } from 'src/app/_services/famillepiece.service';

@Component({
  selector: 'app-addfamillepiece',
  templateUrl: './addfamillepiece.component.html',
  styleUrls: ['./addfamillepiece.component.scss']
})
export class AddfamillepieceComponent implements OnInit {
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
  constructor(private famillepieceservice:FamillepieceService) { }
  refresh(){
    window.location.reload()
  }
  ngOnInit(): void {

  }
  onSubmit(): void {
    
    const { nomFamillePiece, description } = this.form;
    this.famillepieceservice.addfamilepiece(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.refresh()
      },
      err => {
        this.errorMessage = err.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
