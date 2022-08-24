import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandlingComponent } from './global-error-handling/global-error-handling.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipeWithNgIfComponent } from './async-pipe-with-ng-if/async-pipe-with-ng-if.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    GlobalErrorHandlingComponent,
    AsyncPipeWithNgIfComponent,
    ArticleComponent,
  ],
  exports: [
    GlobalErrorHandlingComponent,
    AsyncPipeWithNgIfComponent,
    ArticleComponent,
  ],
})
export class LearnedStuffUiModule {}
