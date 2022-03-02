import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { User } from '../model/User';
const AUTH_API = 'http://localhost:8085';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class UserManagementService {

  constructor(private http : HttpClient, private tokenStorage: TokenStorageService) { this.tokenStorage.getToken}
  allusers(){
   return this.http.get<User>(AUTH_API + '/retrieves-all-users');
       
    }
}


