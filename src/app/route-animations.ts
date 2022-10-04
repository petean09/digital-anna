import { trigger, transition, style, query, group, animateChild, animate, keyframes } from '@angular/animations';


// Fader
export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        query(':enter', [
            animate('600ms ease'),
            style({ opacity:1, transform:'scale(1) translateY(0)'})
        ])
    ]),
]);

// Slider
export const slider = trigger('routeAnimations', [
    transition('1 => 2', slideTo('right')),
    transition('1 => 3', slideTo('right')),
    transition('1 => 4', slideTo('right')),

    transition('2 => 3', slideTo('right')),
    transition('2 => 4', slideTo('right')),

    transition('3 => 4', slideTo('right')),

    transition('4 => 3', slideTo('left')),
    transition('4 => 2', slideTo('left')),
    transition('4 => 1', slideTo('left')),

    transition('3 => 2', slideTo('left')),
    transition('3 => 1', slideTo('left')),

    transition('2 => 1', slideTo('left')),
]);

function slideTo(direction: any) {const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%',
                height: '100%',
            })
        ], optional), 
        query(':enter', [
            style({ [direction]: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('1000ms ease', style({ [direction]: '100%'}))
            ], optional), 
            query(':enter', [
                animate('1000ms ease', style({ [direction]: '0%'}))
            ])
        ]),
    ];
}

// InAndOut
// export const InAndOut = trigger('routeAnimations', [
//     transition('* <=> *', [
//         query(':enter, :leave', [
//             style({
//                 position: 'absolute',
//                 left: 0,
//                 width: '100%',
//                 opacity: 0,
//                 transform: 'scale(0) translateY(100%)',
//             }),
//         ]),
//         query(':enter', [
//             animate('1000ms ease'),
//             style({ opacity:1, transform:'scale(1) translateY(0)'})
//         ])
//     ]),
// ]);