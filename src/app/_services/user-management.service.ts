import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_modele/user';
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'http://localhost:8085';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http : HttpClient, private tokenStorage: TokenStorageService) { }
  allusers(){
    return this.http.get<any[]>(AUTH_API+ '/retrieves-all-users',httpOptions );
        
     }
}
