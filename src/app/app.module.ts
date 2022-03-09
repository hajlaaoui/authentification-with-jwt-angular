import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfComponent } from './conf/conf.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EmailEditorModule } from 'angular-email-editor';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './user-management/list/list.component';
import { DeleteComponent } from './user-management/delete/delete.component';
import { DetailsComponent } from './user-management/details/details.component';
import { ListRoleComponent } from './role-management/list-role/list-role.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddroleComponent } from './role-management/addrole/addrole.component';
import { ListrapportComponent } from './rapport-management/listrapport/listrapport.component';
import { AddrapportComponent } from './rapport-management/addrapport/addrapport.component';
import { AddTempComponent } from './TempEmail-management/add-temp/add-temp.component';
import { ListTempComponent } from './TempEmail-management/list-temp/list-temp.component';
import { ViewTempComponent } from './TempEmail-management/view-temp/view-temp.component';
import { ListfamillepieceComponent } from './famillepiece-management/listfamillepiece/listfamillepiece.component';
import { AddfamillepieceComponent } from './famillepiece-management/addfamillepiece/addfamillepiece.component';
import { AddetapetestComponent } from './etapetest-management/addetapetest/addetapetest.component';
import { ListetapetestComponent } from './etapetest-management/listetapetest/listetapetest.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    MenuComponent,
    ListComponent,
    DeleteComponent,
    DetailsComponent,
    ListRoleComponent,
    AddroleComponent,
    ListrapportComponent,
    AddrapportComponent,
    AddTempComponent,
    ListTempComponent,
    ViewTempComponent,
    ListfamillepieceComponent,
    AddfamillepieceComponent,
    AddetapetestComponent,
    ListetapetestComponent,
   

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EmailEditorModule,
    AccordionModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    BrowserAnimationsModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
