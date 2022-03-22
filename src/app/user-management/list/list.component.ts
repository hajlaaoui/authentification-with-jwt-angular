import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng-lts/api';
import { Table } from 'primeng/table';
import { User } from 'src/app/_modele/user';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserManagementService } from 'src/app/_services/user-management.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: any;
  selectedItems:any
  listRole:any;
  loading: boolean = true;
  rowOperations: MenuItem[] |any;
  display: boolean = false;
  dt: any;
  press:any
  tableHeaders:any
  constructor(private user:UserManagementService,
    private tokenStorage: TokenStorageService,
    private router:Router) {
     
   }

  ngOnInit(): void {
    this.services()
    this.rows()
 
  }
  


  showDialog() {
      this.display = true;
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
  services() {
    this.user.allusers().subscribe(data => {
      this.data = data
      this.loading=false
   console.log(data);
    })
   
   this.user.getRole().subscribe(e=>{
     this.listRole=e
   })
  }
  clear(table: Table) {
    table.clear();
}
inp(even:any){
console.log(even);

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

  this.showDialog();

}
onSelectionChange(){

}
deleteuser(id : number){
  this.user.delteuserById(id).subscribe(data =>{ console.log(data)});
  this.refresh();
}

refresh(): void {
  window.location.reload();
}
onKey(event:any) {const inputValue = event.target.value;}
}
