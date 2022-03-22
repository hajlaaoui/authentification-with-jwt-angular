import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng-lts/api';
import { TempemailService } from 'src/app/_services/tempemail.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-temp',
  templateUrl: './list-temp.component.html',
  styleUrls: ['./list-temp.component.scss']
})
export class ListTempComponent implements OnInit {
  data: any;
  selectedItems:any
  listRole:any;
  loading: boolean = true;
  rowOperations: MenuItem[] |any;
  display: boolean = false;
  dt: any;
  constructor(private tempemailservice:TempemailService,private router:Router) { }

  ngOnInit(): void {
    this.services();
    this.rows();
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
  this.tempemailservice.getalltememail().subscribe(data => {
    this.data = data
    this.loading=false
 console.log(data);
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
this.router.navigate(['/viewtemp'], {
  queryParams: {
    code: this.selectedItems?.jsonorHtmlData
  }
});
}
doEdit(){
console.log("EDIT");
}
doDelete(){

this.showDialog();

}
// deleteuser(id : number){
//   this.user.delteuserById(id).subscribe(data =>{ console.log(data)});
//   this.refresh();
// }
applyFilterGlobal($event :any, stringVal:any) {
  this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}
refresh(): void {
  window.location.reload();
}
onSelectionChange(){

}

}
