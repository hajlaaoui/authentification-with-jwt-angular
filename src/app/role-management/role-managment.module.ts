import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoleComponent } from './list-role/list-role.component';
import {TableModule} from 'primeng/table';
import { DeleteroleComponent } from './deleterole/deleterole.component';
import { AddroleComponent } from './addrole/addrole.component';




@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class RoleManagmentModule { }
