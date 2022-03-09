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
export class FamillepieceService {

  constructor(private http:HttpClient) { }
  getallfammillepiece(){
    return this.http.get<any>(AUTH_API+"/retrieves-all-Famillepiece",httpOptions);
  }
  addfamilepiece(body:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    })

console.log(AUTH_API);

    return this.http.post(AUTH_API + '/save-Famillepiece',body, {
      
    });
  }
}

