import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { appConfig } from '@app/shared/resources';

@Injectable()
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: appConfig.snackbarDuration,
    });
  }
}
