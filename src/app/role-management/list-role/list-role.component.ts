import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng-lts/api';
import { Table } from 'primeng/table';
import { User } from 'src/app/_modele/user';
import { RoleManagementService } from 'src/app/_services/role-management.service';


@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {
  selectedItems:any
 listRole:any;
 loading: boolean = true;
  rowOperations: MenuItem[] |any;
  display: boolean = false;
  dt: any;
  constructor(
    private roleservice: RoleManagementService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service()
    this.rows()
  }
  service(){
    this.roleservice.getallrole().subscribe(data=>{
      this.listRole=data
      this.loading= false
    })
  }
  rows() {
    this.rowOperations = [
      {
        label: 'View',
        icon: '',
       
        command: (event:any) => this.doView(),
      },
      {
        label: 'Edit ',
        icon: '',
        routerLink:'',
        
       
        command: (event:any) => this.doEdit(),
      },
      {
        label: 'Delete',
        icon: '',
        
        
        command: (event:any) => this.doDelete(),
      },
    ]
  }
  doView(){
    console.log("View");
    
    }
    doEdit(){
      console.log("EDIT");
      this.router.navigate(['/register'], {
        queryParams: {
          code: this.selectedItems?.id
        }
      });
    }
    doDelete(){
      
      console.log(this.selectedItems);
    
    }
    inp(even:any){
      console.log(even);
      
      }
      clear(table: Table) {
        table.clear();
    }
    onSelectionChange(){

    }
    
  showDialog() {
    this.display = true;
}
applyFilterGlobal($event :any, stringVal:any) {
  this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}
refresh(): void {
  window.location.reload();
}
}
