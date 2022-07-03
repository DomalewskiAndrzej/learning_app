import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartingPageComponent {}
