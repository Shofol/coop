import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '@/_models';

@Injectable({
  	providedIn: 'root'
})
export class MenuService {
	
	constructor(private http: HttpClient) { }

	getAll() {

    	return this.http.get<{ menu: Menu }>( "" );
	}
}
