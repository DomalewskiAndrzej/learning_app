import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-async-pipe-with-ng-if',
  templateUrl: './async-pipe-with-ng-if.component.html',
  styleUrls: ['./async-pipe-with-ng-if.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncPipeWithNgIfComponent {
  @Input() asyncPipeVariable: string;
}
