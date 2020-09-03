import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers() {
    // const params = new HttpParams({"page": 1});
    // params.set('page', String(page));

    // return this.http.get('/dev/users');
  }

  getUser(id) {
    return this.http.get(`/dev/user/${id}`);
  }

  addUser(data) {
    return this.http.post('dev/users', data);
  }

  getMe() {
    // const headers = new HttpHeaders({Authentication: localStorage.getItem('token')});
    return this.http.get('/dev/me');
  }
}
