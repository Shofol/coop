import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Payload, DateRange } from '@/_models';
import { NotificaionService } from './notification.service';

@Injectable()
export class NotificationResolverService implements Resolve<Observable<Payload>> {

	constructor( private notificationService: NotificaionService ) {}

	resolve() { return this.notificationService.getNotifications(); }
}