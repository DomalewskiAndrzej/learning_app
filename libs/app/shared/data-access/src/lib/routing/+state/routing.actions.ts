import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Link } from '@app/shared/domain';

export const actionfFromRouting = createActionGroup({
  source: 'Routing',
  events: {
    Navigate: props<{ link: Link }>(),
    'Go Back': emptyProps(),
  },
});
