import { Component, OnInit } from '@angular/core';
import { RoleManagementService } from 'src/app/_services/role-management.service';


@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.scss']
})
export class AddroleComponent implements OnInit {
  errorMessage = '';
  isSuccessful = false;


  form: any = {
    roleName: null,
    roleDescription: null
    
  };
  constructor(private roleservice:RoleManagementService) { }
  onSubmit(): void {
    const { roleName, roleDescription } = this.form;
    this.roleservice.addrole(roleName, roleDescription).subscribe(
      data => {
         this.form.roleName=data.roleName;
        this.form.roleDescription=data.roleDescription;
      },
      err => {
        this.errorMessage = err.message;
       
      }
    );
  }
  ngOnInit(): void {
  }

}
