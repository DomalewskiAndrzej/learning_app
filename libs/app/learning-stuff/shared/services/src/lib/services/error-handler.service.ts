import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, retry, timer } from 'rxjs';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler, HttpInterceptor {
  constructor(private zone: NgZone) {}

  handleError(error: unknown) {
    this.zone.run(() => {
      console.warn(`Error detected globally: ${error}`);
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry({
        count: 3,
        delay: (_, retryCount) => timer(retryCount * 1000),
      }),
      catchError(() => {
        console.log('Error handled by interceptor');
        throw new Error('Interceptor thrown error');
      })
    );
  }
}
