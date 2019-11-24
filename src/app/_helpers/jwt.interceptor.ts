import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, 
         HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, 
         HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthenticationService } from '@/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor( private authService: AuthenticationService ) {}

    isRefreshingToken: boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | 
                                                                         HttpResponse<any> | HttpUserEvent<any> | any> {

        const token = this.authService.getAuthToken();
        
        const decoratedRequest = token ? this.addTokenToRequest(request, token) : request;

        return next.handle(decoratedRequest);
    }

    private addTokenToRequest(request: HttpRequest<any>, token: string) : HttpRequest<any> {
        return request.clone({ setHeaders: { Authorization: `Bearer ${token}`}});
    }
}
