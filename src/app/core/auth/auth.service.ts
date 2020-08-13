import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';
import {userProfileMetadata} from '@model/../../models/forms/user-profile';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cachedRequests: Array<HttpRequest<any>> = [];
  public permissions = [];
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
              private router: Router,
              private permissionsService: NgxPermissionsService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(credentials) {
    console.log('cred:', credentials);
    this.http.post('/dev/sign-in', credentials)
      .subscribe(
        (res: {success: boolean, data: {expires: number, token: string, user: User}}) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('expires', res.data.expires.toString());
          this.http.get('/dev/me').subscribe((resp: any) => {
            localStorage.setItem('user', JSON.stringify(resp.data));
            this.currentUserSubject.next(resp.data);
            this.permissions = [resp.data.role];
            this.permissionsService.loadPermissions(this.permissions);
            this.router.navigate(['/app/user/add', {controls: JSON.stringify(userProfileMetadata)}]);
          });
        },
        (err) => {
          console.error(err);
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  tokenExpired() {
    const expires = localStorage.getItem('expires');
    return (Math.floor((new Date()).getTime() / 1000)) >= Number(expires);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();

    return token != null && !this.tokenExpired();
  }

  /*public refreshToken() {
    return this.http.post<any>(`${config.apiUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }*/

  public collectFailedRequests(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
