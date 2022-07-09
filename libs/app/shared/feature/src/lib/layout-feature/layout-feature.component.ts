import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link, LINKS } from '@app/shared/domain';
import { RoutingFacade } from '@app/shared/data-access';
import { HomeFacade } from '../../../../data-access/src/lib/home/+state/home.facade';

@Component({
  selector: 'app-layout-feature',
  templateUrl: './layout-feature.component.html',
  styleUrls: ['./layout-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureComponent {
  links = LINKS;
  routingUrl$ = this.routingFacade.getRoutingUrl$;
  sidenav$ = this.homeFacade.sidenav$;

  constructor(
    private routingFacade: RoutingFacade,
    private homeFacade: HomeFacade
  ) {}

  navigateToTodo() {
    this.navigateTo(this.links.todo);
  }

  navigateTo(link: Link): void {
    this.routingFacade.navigate(link);
  }
}
