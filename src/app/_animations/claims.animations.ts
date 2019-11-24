import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

export const slideInOutEnterAnimation = animation([
    style({ transform: 'translateX(100%)' }),
    animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
]);

export const slideInOutLeaveAnimation = animation([
    animate('200ms ease-in', style({ transform: 'translateX(100%)' }))
]);

export const fadeInOutEnterAnimation = animation([
    style({ opacity: 0 }),
    animate('200ms ease-in', style({ opacity: 1 }))
]);

export const fadeInOutLeaveAnimation = animation([
    animate('200ms ease-in', style({ opacity: 0 }))
]);
