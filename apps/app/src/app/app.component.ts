import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GuardsCheckEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'learning_app';
  loading = true;
  ngUnsubscribe$ = new Subject<void>();

  constructor(private router: Router) {
    this.router.events
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((event) => {
        if (event instanceof GuardsCheckEnd) {
          this.loading = false;
          this.ngUnsubscribe$.next();
          this.ngUnsubscribe$.complete();
        }
      });
  }
}
