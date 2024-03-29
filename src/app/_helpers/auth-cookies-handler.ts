import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthCookie {
    constructor() { }

    getAuth(): string {
        return Cookie.get('id_token');
    }

    setAuth(value: string): void {
        //0.0138889//this accept day not minuts
        Cookie.set('id_token', value, 0.0138889);
    }

    deleteAuth(): void {
        Cookie.delete('id_token');
    }  
}