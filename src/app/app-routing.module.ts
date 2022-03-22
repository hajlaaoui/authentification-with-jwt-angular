import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ConfComponent } from './conf/conf.component';
import { AddfamillepieceComponent } from './famillepiece-management/addfamillepiece/addfamillepiece.component';
import { ListfamillepieceComponent } from './famillepiece-management/listfamillepiece/listfamillepiece.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddmodeleComponent } from './modele-management/addmodele/addmodele.component';
import { ListmodeleComponent } from './modele-management/listmodele/listmodele.component';
import { ProfileComponent } from './profile/profile.component';
import { AddrapportComponent } from './rapport-management/addrapport/addrapport.component';
import { RegisterComponent } from './register/register.component';
import { AddroleComponent } from './role-management/addrole/addrole.component';
import { ListRoleComponent } from './role-management/list-role/list-role.component';
import { AddTempComponent } from './TempEmail-management/add-temp/add-temp.component';
import { ListTempComponent } from './TempEmail-management/list-temp/list-temp.component';
import { ViewTempComponent } from './TempEmail-management/view-temp/view-temp.component';
import { DeleteComponent } from './user-management/delete/delete.component';
import { ListComponent } from './user-management/list/list.component' ;
import { AddwizardComponent } from './wizard-management/addwizard/addwizard.component';

const routes: Routes = [
 
   {
    path: 'info', component: ConfComponent 
   },
   { path: 'register', component: RegisterComponent },
   { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'user', component: BoardUserComponent },
   { path: 'mod', component: BoardModeratorComponent },
   { path: 'admin', component: BoardAdminComponent },
   { path: 'listuser', component:ListComponent },
   { path: 'listrole', component:ListRoleComponent },
   { path: 'deleteuser', component:DeleteComponent },
   { path: 'addrole', component:AddroleComponent },
   { path: 'addrapport', component:AddrapportComponent },
   { path: 'addTemEmail', component:AddTempComponent },
   { path: 'listtemp', component:ListTempComponent },
   { path: 'viewtemp', component:ViewTempComponent },
   { path: 'addfammilepiece', component:AddfamillepieceComponent },
   { path: 'listfammilepiece', component:ListfamillepieceComponent },
   { path: 'addwizard', component:AddwizardComponent },
   { path: 'addmodele', component:AddmodeleComponent },
   { path: 'listmodele', component:ListmodeleComponent },
  //  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
