import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, first } from 'rxjs/operators';
import { User, Auth } from '@/_models';
import { UserService } from './user.service';
import { loadUser } from '@/state/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@/state/reducers';
import { loginUrl, refreshUrl } from '@/_helpers/urls';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,
                private userService: UserService,
				private store: Store<AppState>) {
                    
        const returnUser = JSON.parse(localStorage.getItem('currentUser'));

        // if( returnUser ) { returnUser.token = this.authCookie.getAuth(); }

        this.currentUserSubject = new BehaviorSubject<User>(returnUser);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        return this.http.post<Auth>(loginUrl, { username, password })
            .pipe(  map(res => {
                        console.log("BANG", res);
                        localStorage.setItem('access', JSON.stringify(res));
                        // this.authCookie.setAuth(res);
                        // this.currentUserSubject.next(res);
                        return res;
                    }),
                    switchMap(res => this.userService.getUserById("abc")),
                    first(),
                    map(user => this.store.dispatch(loadUser({ payload: user })))
            );
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('access');
        // this.authCookie.deleteAuth();
        this.currentUserSubject.next(null);
    }

    refreshToken() : Observable<Auth> {
        let axs = JSON.parse(localStorage.getItem('access'));
    
        return this.http.post<Auth>(refreshUrl, { 'token': axs.refresh })
                        .pipe(
                            map(axs => {
                    
                                if (axs) { localStorage.setItem('access', JSON.stringify(axs)); }
                    
                                return <Auth>axs;
                            })
                        );
    }


    getAuthToken() : string {

        const axs = JSON.parse(localStorage.getItem('access'));

        return axs != null ? axs.access : "";
    }
}