import { Component } from '@angular/core';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})

export class AppNotificationComponent {
    notifications = [];
    constructor() {
        this.fetch(data => {
            this.notifications = data;
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/notification.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }
}