import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

const DRAMATIC = 'cubic-bezier(0.95, 0.05, 0.25, 1)';
const APPLE = 'cubic-bezier(0.34, 0.01, 0.25, 1)';

export const rootRouteAnimations = trigger('rootRouteAnimations', [

  transition('LandingPage => *', [
    style({ position: 'relative', overflow: 'hidden' }),

    query(':enter, :leave', [
      style({
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }),
    ], { optional: true }),

    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(0)',
        zIndex: 1,
      }),
    ], { optional: true }),

    query(':leave', [
      style({
        opacity: 1,
        transform: 'translateY(0)',
        zIndex: 2,
      }),
    ], { optional: true }),

    group([
      query(':leave',
        animate(
          `1000ms ${DRAMATIC}`,
          style({ transform: 'translateY(-100%)' })
        ),
        { optional: true }
      ),
      query(':enter',
        animate(
          `600ms 80ms ${DRAMATIC}`,
          style({ opacity: 1 })
        ),
        { optional: true }
      ),
    ]),
  ]),

  transition('* => LandingPage', [
    style({ position: 'relative', overflow: 'hidden' }),

    query(':enter, :leave', [
      style({
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }),
    ], { optional: true }),

    query(':enter', [
      style({
        opacity: 1,
        transform: 'translateY(-100%)',
        zIndex: 2,
      }),
    ], { optional: true }),

    query(':leave', [
      style({
        opacity: 1,
        transform: 'translateY(0)',
        zIndex: 1,
      }),
    ], { optional: true }),

    query(':enter',
      animate(
        `500ms ${APPLE}`,
        style({ transform: 'translateY(0)' })
      ),
      { optional: true }
    ),
  ]),
]);
