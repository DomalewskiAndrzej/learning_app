import { Component } from '@angular/core';
import { LINKS } from '@app/shared/domain';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  links = LINKS;
}
