import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap, first } from 'rxjs/operators';
import { User, Auth, Payload } from '@/_models';
import { UserService } from './user.service';
import { loadUser } from '@/state/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@/state/reducers';
import { loginUrl, refreshUrl } from '@/_helpers/urls';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUser: Observable<User>;
    public loginProblem$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    constructor(private http: HttpClient,
                private userService: UserService,
                private router: Router,
				private store: Store<AppState>) {
    }

    public isLoggedIn(): boolean {

        const authObj = JSON.parse(localStorage.getItem('access'));

        return authObj && authObj.accesskey;
    }

    getAccessObject() : Auth {
        return JSON.parse(localStorage.getItem('access'));
    }

    login(username, password) {

        const payload = {
            accesskey: "",
            genericbody: {
                UserName: username,
                Password: password,
                ResponseMessage: null,
                AccessGranted: false,
                SaveLogIn: false,
                Other1: null,
                Other2: null,
                Other3: null
            },
            sessionkey: null,
            userid: "0"
        };
        
        return this.http.post<Auth>(loginUrl, payload)
            .pipe(  map(res => {
                        localStorage.setItem('access', JSON.stringify(res));
                        return res;
                    })
                    // switchMap(res => this.userService.getUserById()),
                    // first(),
                    // map(user => this.store.dispatch(loadUser({ payload: user })))
            );
    }

    logout() {
        // this.store.dispatch(loadUser({ payload: null }));
        localStorage.removeItem('access');

        this.router.navigate(['/login']);
    }

    refreshToken() : Observable<Auth> {
        let axs = JSON.parse(localStorage.getItem('access'));
    
        return this.http.post<Auth>(refreshUrl, { 'refresh': axs.refresh })
                        .pipe(
                            map(axs => {
                    
                                if (axs) { localStorage.setItem('access', JSON.stringify(axs)); }
                    
                                return <Auth>axs;
                            })
                        );
    }

    getAuthToken() : string {

        const axs: Auth = JSON.parse(localStorage.getItem('access'));

        return axs != null ? axs.accesskey : "";
    }
}