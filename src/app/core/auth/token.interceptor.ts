import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  /**
   * При перехвате запроса надо проверять существует ли токен, если существует, то
   * добавить его в заголовки и отправить как клонированный, иначе отправить исходный
   * запрос без изменений (будет ошибка если запросить токен а localstorage пуст)
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    if (token) {
      const cloned = request.clone({setHeaders: {
          Authentication: this.auth.getToken()
        }});
      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }

}
