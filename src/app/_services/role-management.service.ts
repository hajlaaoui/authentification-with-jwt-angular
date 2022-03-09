import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../_modele/role';
const AUTH_API = 'http://localhost:8085';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {

  constructor(private http : HttpClient) { }
  getallrole(){
    return this.http.get<Role>(AUTH_API+"/retrieves-all-role",httpOptions);
  }
  addrole(roleName: string, roleDescription: string): Observable<any> {
    return this.http.post(AUTH_API + '/createNewRole', {
      roleName,
      roleDescription
    }, httpOptions);
  }
  
}
