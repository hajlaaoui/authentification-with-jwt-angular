import { Component, OnInit } from '@angular/core';
import { ModeleManagementService } from 'src/app/_services/modele-management.service';

@Component({
  selector: 'app-addmodele',
  templateUrl: './addmodele.component.html',
  styleUrls: ['./addmodele.component.scss']
})
export class AddmodeleComponent implements OnInit {
  errorMessage = '';
  isSuccessful = false;


  form: any = {
    nomModele: null,
    detailsModele: null
    
  };
  constructor(private modeleservice: ModeleManagementService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { nomModele, detailsModele } = this.form;
    this.modeleservice.addModele(nomModele, detailsModele).subscribe(
      data => {
         this.form.roleName=data.roleName;
        this.form.roleDescription=data.roleDescription;
      },
      err => {
        this.errorMessage = err.message;
       
      }
    );
  }

}
