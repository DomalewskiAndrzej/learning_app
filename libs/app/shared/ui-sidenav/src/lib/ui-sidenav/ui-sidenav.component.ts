import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Link } from '@app/shared/domain';
import { LinksType } from '../../../../domain/src/lib/utils/types/links.type';

@Component({
  selector: 'app-ui-sidenav',
  templateUrl: './ui-sidenav.component.html',
  styleUrls: ['./ui-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSidenavComponent {
  @Output() navigateTo = new EventEmitter<Link>();
  @Input() links: LinksType;
  @Input() routingUrl: string;
  @Input() sidenav: boolean;
  isExpanded = true;

  onNavigateTo(link: Link) {
    this.navigateTo.emit(link);
  }
}
