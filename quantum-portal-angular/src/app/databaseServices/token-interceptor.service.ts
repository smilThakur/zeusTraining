import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject: Injector) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.inject.get(LoginService)
    let jwtToken = this.addTokenHeader(req, authService.getToken())

    return next.handle(jwtToken).pipe(
      catchError((err) => {
        console.log("err from interceptor.....", err)
        if (err.status == 401) {
          authService.logOut()
        }
        throw new Error(err)
      })
    )
  }

  addTokenHeader(req: HttpRequest<any>, token: any) {
    return req.clone({ headers: req.headers.set('Authorization', `bearer ${token}`) })
  }
}
