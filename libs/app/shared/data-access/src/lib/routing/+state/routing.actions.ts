import { createAction, props } from '@ngrx/store';
import { Link } from '@app/shared/domain';

export const navigate = createAction(
  '[Home] navigate',
  props<{ link: Link }>()
);

export const goBack = createAction('[Home] Go Back');

export const routingActions = {
  navigate,
  goBack,
};
