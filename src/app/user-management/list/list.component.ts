import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
 
 
  constructor(private user:UserManagementService,private tokenStorage: TokenStorageService) {
    this.user.allusers();
   }

  ngOnInit(): void {
 this.user.allusers().subscribe(data => {
   this.data = data
console.log(data);
 })
  }
  clear(table: Table) {
    table.clear();
}
}
