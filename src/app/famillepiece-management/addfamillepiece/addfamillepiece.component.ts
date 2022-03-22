import { Component, OnInit } from '@angular/core';
import { FamillepieceService } from 'src/app/_services/famillepiece.service';
import { ModeleManagementService } from 'src/app/_services/modele-management.service';

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
  data: any 
  selectedCity: any[] | undefined ;
  constructor(private famillepieceservice:FamillepieceService,private modeleservice:ModeleManagementService) { }
  refresh(){
    window.location.reload()
  }
  ngOnInit(): void {
    this.modeleservice.getallmodele().subscribe(data =>{
      this.data = data
    })

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
