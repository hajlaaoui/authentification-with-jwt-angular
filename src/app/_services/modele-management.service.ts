import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8085';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ModeleManagementService {

  constructor(private http:HttpClient) { }
  addModele(nomModele: string, detailsModele: string): Observable<any> {
    return this.http.post(AUTH_API + '/save-Modele', {
      nomModele,
      detailsModele
    }, httpOptions);
  }
  getallmodele(){
    return this.http.get<any>(AUTH_API+"/retrieves-all-modele",httpOptions);
  }
}