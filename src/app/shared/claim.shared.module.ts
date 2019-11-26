import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';
import { MatTooltipModule } from '@angular/material';

@NgModule({
    declarations: [NotificationComponent],
    imports: [
        CommonModule,
        MatTooltipModule
    ],
    exports: [
        NotificationComponent,
    ]
})
export class ClaimSharedModule { }
