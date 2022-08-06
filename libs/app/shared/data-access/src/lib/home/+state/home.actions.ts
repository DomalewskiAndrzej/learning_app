import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const actionsFromHome = createActionGroup({
  source: 'Home',
  events: {
    'Toggle Sidenav': emptyProps(),
    'Request In Progress': props<{ requestInProgress: boolean }>(),
  },
});
