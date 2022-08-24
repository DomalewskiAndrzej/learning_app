import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Link, NavigationLink, Path } from '@app/shared/domain';

@Component({
  selector: 'app-ui-sidenav',
  templateUrl: './ui-sidenav.component.html',
  styleUrls: ['./ui-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSidenavComponent {
  @Output() navigateTo = new EventEmitter<Link>();
  @Input() navigationLink: NavigationLink;
  @Input() routingUrl: string;
  @Input() sidenav: boolean;
  isExpanded = true;

  onNavigateTo(path: Path) {
    this.navigateTo.emit({ path });
  }
}
