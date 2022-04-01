import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng-lts/api';
import { ModeleManagementService } from 'src/app/_services/modele-management.service';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-listmodele',
  templateUrl: './listmodele.component.html',
  styleUrls: ['./listmodele.component.scss']
})
export class ListmodeleComponent implements OnInit {
  data: any[] | any;
  selectedItems:any
  listRole:any;
  loading: boolean = true;
  rowOperations: MenuItem[] |any;
  display: boolean = false;
  dt: any;
  @Input() getmodel: any  ;
  @Output() datatemplemail = new EventEmitter()
  constructor(private modeleservice:ModeleManagementService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.getmodel)
    this.services();
    this.rows();
  
  }
  showDialog() {
    this.display = true;
}
rows() { if(this.router.url === '/listfammilepiece'){
  

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
} else {
  this.rowOperations = [
    {
      label: 'Détails',
      icon: '',
     
      command: (event:any) => this.doView(),
    }
  ]
  
  
}
}
services() {
//   this.modeleservice.getallmodele().subscribe(data => {
//     this.data = data
//     this.loading=false
//  console.log(data);
//   })
console.log(this.getmodel)
this.data = []
 this.data.push(this.getmodel)
 this.loading=false

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
// console.log("EDIT");
// this.router.navigate(['/register'], {
//   queryParams: {
//     code: this.selectedItems?.id
//   }
// });
}
doDelete(){

this.showDialog();

}
onSelectionChange(){
  console.log(this.selectedItems)
  if(this.selectedItems && this.selectedItems.modele){
    this.datatemplemail.emit(this.selectedItems.modele)
  }else {

  console.log("not found model")

  }
}
deleteuser(id : number){
// this.user.delteuserById(id).subscribe(data =>{ console.log(data)});
// this.refresh();
}
applyFilterGlobal($event :any, stringVal:any) {
this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}
refresh(): void {
window.location.reload();
}
isHomeRoute() {
  return this.router.url === '/';
}

}
