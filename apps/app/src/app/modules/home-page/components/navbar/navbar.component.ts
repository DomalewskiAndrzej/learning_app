import { Component, Input } from '@angular/core';
import { RoutingFacade } from '@app/shared/data-access';
import { Link } from '@app/shared/domain';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() links: Link[] = [];
  isExpanded = true;

  constructor(private homePageFacade: RoutingFacade) {}

  navigateTo(link: Link) {
    this.homePageFacade.navigate(link);
  }
}
