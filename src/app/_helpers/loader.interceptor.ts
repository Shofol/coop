import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { Store } from '@ngrx/store';
import { AppState } from '@/state/reducers';
import { toggleLoading } from '@/state/actions/application.actions';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.store.dispatch(toggleLoading({ payload: true }));

        return next.handle(req).pipe(
            finalize(() => this.store.dispatch(toggleLoading({ payload: false })))
        );
    }
}