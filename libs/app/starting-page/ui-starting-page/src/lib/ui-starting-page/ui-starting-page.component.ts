import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ui-starting-page',
  templateUrl: './ui-starting-page.component.html',
  styleUrls: ['./ui-starting-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiStartingPageComponent {}
