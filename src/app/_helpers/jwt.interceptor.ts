import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, 
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, 
         HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { AuthCookie } from './auth-cookies-handler';
import { AuthenticationService } from '@/_services';
import { catchError, filter, take, switchMap, finalize } from 'rxjs/operators';
import { Auth } from '@/_models';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor( private authCookie: AuthCookie,
                 private authService: AuthenticationService ) {}

    isRefreshingToken: boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | 
                                                                         HttpResponse<any> | HttpUserEvent<any> | any> {

        const token = this.authService.getAuthToken();
        const decoratedRequest = this.addTokenToRequest(request, token);

        return next.handle(decoratedRequest)
                    // .pipe(
                    //     catchError(err => {
                    //     if (err instanceof HttpErrorResponse) {
                    //         switch ((<HttpErrorResponse>err).status) {
                    //         case 401:
                    //             return this.handle401Error(request, next);
                    //         case 400:
                    //             return <any>this.authService.logout();
                    //         }
                    //     } else {
                    //         return throwError(err);
                    //     }
                    //     }));
        }
    
        private addTokenToRequest(request: HttpRequest<any>, token: string) : HttpRequest<any> {
            return request.clone({ setHeaders: { Authorization: `Token ${token}`}});
        }
    
    //   private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    
    //     if(!this.isRefreshingToken) {
    //       this.isRefreshingToken = true;
    
    //       // Reset here so that the following requests wait until the token
    //       // comes back from the refreshToken call.
    //       this.tokenSubject.next(null);
    
    //       return this.authService.refreshToken()
    //         .pipe(
    //           switchMap((axs: Auth) => {
    //             if(axs) {
    //               this.tokenSubject.next(axs.access);;
    //               localStorage.setItem('acess', JSON.stringify(axs));
    //               return next.handle(this.addTokenToRequest(request, axs.access));
    //             }
    
    //             return <any>this.authService.logout();
    //           }),
    //           catchError(err => {
    //             return <any>this.authService.logout();
    //           }),
    //           finalize(() => {
    //             this.isRefreshingToken = false;
    //           })
    //         );
    //     } else {
    //       this.isRefreshingToken = false;
    
    //       return this.tokenSubject
    //         .pipe(filter(token => token != null),
    //           take(1),
    //           switchMap(token => {
    //           return next.handle(this.addTokenToRequest(request, token));
    //         }));
    //     }
    //   }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     // add authorization header with jwt token if available  
    //     // const token = this.authCookie.getAuth();
    //     let token;
	// 	token = "bf8b933a835925fe4f83601c997ed09d6a94d641"; // superuser token
    //     // token = "9a18038db3a5df4e42dc275cd8381b8224394e3e"; // builder-type token
    //     if (token) {
    //         request = request.clone({
    //             setHeaders: { 
    //                 'Authorization': `Token ${token}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //     }

    //     return next.handle(request);
    // }
}