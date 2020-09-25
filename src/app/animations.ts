
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';


export let fadeEffectAnimation = trigger('fade', [
    state('void', style({ opacity: 0 })),
    // transition('void=>*, *=>void', [
    // transition('void <=>*', [
    transition(':enter ,:leave', [

        animate(2000)
    ]),

])

export let slideEffectAnimation = trigger('flyInOut', [
    state('in', style({ transform: 'translateX(50px)' })),
    transition('void => *', [
        style({ transform: 'translateX(50px)' }),
        animate(2000)
    ]),
    transition('* => void', [
        animate(2000, style({ transform: 'translateX(50px)' }))
    ])
])

export let slideEffectAliasAnimation = trigger('flyInOut', [
    state('void', style({ transform: 'translateX(20px)' })),
    transition(':enter ,:leave', [

        animate(1000)
    ]),

])

export let openCloseEffect = trigger('openClose', [


    state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
    })),
    state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
    })),
    transition('open => closed', [
        animate('1s')
    ]),
    transition('closed => open', [
        animate('0.5s')
    ])
])

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> AboutPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('200ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);