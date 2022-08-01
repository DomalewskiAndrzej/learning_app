import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Link, LINKS, LoadItems } from '@app/shared/domain';
import {
  HomeFacade,
  NotificationsFacade,
  RoutingFacade,
} from '@app/shared/data-access';

@Component({
  selector: 'app-layout-feature',
  templateUrl: './layout-feature.component.html',
  styleUrls: ['./layout-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureComponent implements OnInit {
  links = LINKS;
  routingUrl$ = this.routingFacade.getRoutingUrl$;
  sidenav$ = this.homeFacade.sidenav$;
  todosInProgressQuantity$ =
    this.notificationsFacade.getTodosInProgressQuantity$;
  notificationsQuantity$ = this.notificationsFacade.getNotificationsQuantity$;

  constructor(
    private routingFacade: RoutingFacade,
    private homeFacade: HomeFacade,
    private notificationsFacade: NotificationsFacade
  ) {}

  ngOnInit(): void {
    this.notificationsFacade.loadNotificationsQuantity();
    this.notificationsFacade.loadTodosInProgressQuantity();
  }

  navigateBack() {
    this.routingFacade.goBack();
  }

  navigateTo(link: Link): void {
    this.routingFacade.navigate(link);
  }

  loadTodosInProgress(loadItems: LoadItems): void {
    this.notificationsFacade.loadTodosInProgress(loadItems);
  }

  loadNotifications(loadItems: LoadItems): void {
    this.notificationsFacade.loadNotifications(loadItems);
  }
}
