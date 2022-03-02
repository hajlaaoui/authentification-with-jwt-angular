import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ConfComponent } from './conf/conf.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './user-management/list/list.component' ;

const routes: Routes = [
 
   {
    path: 'info', component: ConfComponent 
   },
   { path: 'login/register', component: RegisterComponent },
   { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'user', component: BoardUserComponent },
   { path: 'mod', component: BoardModeratorComponent },
   { path: 'admin', component: BoardAdminComponent },
   { path: 'home/listuser', component:ListComponent },
   { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }