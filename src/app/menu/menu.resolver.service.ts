import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MenuService } from '@/_services';
import { Menu } from '@/_models';

@Injectable()
export class MenuResolverService implements Resolve<Observable<{ menu: Menu }>> { // { menu: Menu[] }
	constructor(private menuService: MenuService ) {}

	resolve() {
		return this.menuService.getAll()
	}
}