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
export class TempemailService {

  constructor(private http: HttpClient) { }
  addTemp(jsonorHtmlData: string): Observable<any> {
    return this.http.post(AUTH_API + '/save-TempEmail', {
      jsonorHtmlData
    }, httpOptions);
  }
  getalltememail(){
    return this.http.get<any>(AUTH_API+"/retrieves-all-tempemail",httpOptions);
  }
}
