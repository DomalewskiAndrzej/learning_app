import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Link,
  LoadItems,
  NAVIGATION_LINKS,
  NAVIGATION_PATHS,
} from '@app/shared/domain';
import {
  HomeFacade,
  NotificationsFacade,
  RoutingFacade,
} from '@app/shared/data-access';
import { Todo } from '@app/app/to-do/domain';
import { TodoFacade } from '@app/app/to-do/data-access';

@Component({
  selector: 'app-layout-feature',
  templateUrl: './layout-feature.component.html',
  styleUrls: ['./layout-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureComponent {
  navigationLinks = NAVIGATION_LINKS;
  routingUrl$ = this.routingFacade.getRoutingUrl$;
  sidenav$ = this.homeFacade.sidenav$;
  todosInProgressNotificationsQuantity$ =
    this.notificationsFacade.getTodosInProgressQuantity$;
  todosInProgressNotifications$ = this.notificationsFacade.getTodosInProgress$;
  notificationsQuantity$ = this.notificationsFacade.getNotificationsQuantity$;
  notifications$ = this.notificationsFacade.getNotifications$;
  requestInProgress$ = this.homeFacade.requestInProgress$;
  notificationsRequestInProgress$ =
    this.notificationsFacade.notificationsRequestInProgress$;

  constructor(
    private routingFacade: RoutingFacade,
    private homeFacade: HomeFacade,
    private todoFacade: TodoFacade,
    private notificationsFacade: NotificationsFacade
  ) {}

  openNotification(todoInProgress: Todo): void {
    this.todoFacade.selectTodos([todoInProgress]);
    this.routingFacade.navigate({ path: NAVIGATION_PATHS.todoPreview });
  }

  navigateBack() {
    this.routingFacade.goBack();
  }

  navigateTo(link: Link): void {
    this.routingFacade.navigate(link);
  }

  loadTodosInProgressNotifications(loadItems: LoadItems): void {
    this.notificationsFacade.loadTodosInProgressNotifications(loadItems);
  }

  loadNotifications(loadItems: LoadItems): void {
    this.notificationsFacade.loadNotifications(loadItems);
  }
}
