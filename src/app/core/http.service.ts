import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  auth(credentials) {
    return this.http.post('/dev/sign-in', credentials);
  }

  getUsers(page) {
    const headers = new HttpHeaders({Authentication: localStorage.getItem('token')});
    // const params = new HttpParams({page: '1'});
    // params.set('page', String(page));

    return this.http.get('/dev/users', {headers});
  }

  getMe() {
    const headers = new HttpHeaders({Authentication: localStorage.getItem('token')});
    return this.http.get('/dev/me', {headers});
  }
}