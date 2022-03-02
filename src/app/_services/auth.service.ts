import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8085';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string,email: string): Observable<any> {
    return this.http.post(AUTH_API + '/authenticate', {
      username,
      password,
      email
    }, httpOptions);
  }
  register(body:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    })

console.log(AUTH_API);

    return this.http.post(AUTH_API + '/register',body, {
      
    });
  }
}