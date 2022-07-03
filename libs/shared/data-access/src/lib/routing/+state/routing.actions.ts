import { createAction, props } from '@ngrx/store';
import { Link } from '@app/shared/domain';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace RoutingActions {
  export const Navigate = createAction(
    '[Home] Navigate',
    props<{ link: Link }>()
  );
}
