import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-global-error-handling',
  templateUrl: './global-error-handling.component.html',
  styleUrls: ['./global-error-handling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalErrorHandlingComponent {
  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  // errors are handled by GlobalErrorHandler - service

  makeRequest() {
    this.http.get<unknown>('https://google.com').subscribe();
  }

  throwAsyncError() {
    // eslint-disable-next-line no-useless-catch
    try {
      setTimeout(() => {
        this.throwSyncError();
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  throwSyncError() {
    (({} as any).error());
  }

  throwSyncErrorAndHandleLocally() {
    try {
      this.throwSyncError();
    } catch (error) {
      this.snackbar.open(`Error detected locally: ${error}`, 'Close', {
        duration: 2000,
      });
    }
  }

  throwAsyncErrorWithRxjs() {
    console.log();
    timer(0)
      .pipe(
        tap(() => {
          console.log('HI from tap');
          throw new Error('Error thrown from tap operator');
        }),
        catchError((error) => {
          console.log('Caught error from tap operator: ' + error);
          throw new Error('Error thrown from  catchError operator');
        })
      )
      .subscribe();
  }
}
