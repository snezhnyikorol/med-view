import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        const a = event;
      }, (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            console.log('Oops error');
            this.auth.collectFailedRequests(request);
            this.auth.logout();
            location.reload(true);
          }
        }
      })
    );
  }
}
