import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, finalize, filter, take } from 'rxjs/operators';

import { AuthenticationService } from '@/_services';
import { Auth } from '@/_models';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {}

    isRefreshingToken: boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpSentEvent     | HttpHeaderResponse | HttpProgressEvent | 
                                                                         HttpResponse<any> | HttpUserEvent<any> | any> {
        return next.handle(request).pipe(catchError(err => {
            
            switch ((<HttpErrorResponse>err).status) {
                case 401:   return this.handle401Error(request, next);
                case 400:   return <any>this.authService.logout();
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
    
    private addTokenToRequest(request: HttpRequest<any>, token: string) : HttpRequest<any> {
        return request.clone({ setHeaders: { Authorization: `Token ${token}`}});
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    
        if(!this.isRefreshingToken) {
          this.isRefreshingToken = true;
    
          // Reset here so that the following requests wait until the token
          // comes back from the refreshToken call.
          this.tokenSubject.next(null);
    
          return this.authService.refreshToken()
            .pipe(
              switchMap((axs: Auth) => {
                if(axs) {
                  this.tokenSubject.next(axs.access);;
                  localStorage.setItem('acess', JSON.stringify(axs));
                  return next.handle(this.addTokenToRequest(request, axs.access));
                }
    
                return <any>this.authService.logout();
              }),
              catchError(err => {
                return <any>this.authService.logout();
              }),
              finalize(() => {
                this.isRefreshingToken = false;
              })
            );
        } else {
            
          this.isRefreshingToken = false;
    
          return this.tokenSubject
            .pipe(filter(token => token != null),
              take(1),
              switchMap(token => {
              return next.handle(this.addTokenToRequest(request, token));
            }));
        }
      }
}