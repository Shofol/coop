﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getUserById(id: string) {
        return this.http.get<User[]>("");
    }

    getAll() {
        return this.http.get<User[]>(/*`${config.apiUrl} */ `/users`);
    }

    delete(id: number) {
        return this.http.delete(/*`${config.apiUrl} */ `/users/${id}`);
    }
}