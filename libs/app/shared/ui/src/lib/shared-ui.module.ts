import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiConfirmationDialogComponent } from './ui-confirmation-dialog/ui-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UiSidenavComponent } from './ui-sidenav/ui-sidenav.component';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { UiNotificationComponent } from './ui-notification/ui-notification.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    UiConfirmationDialogComponent,
    UiSidenavComponent,
    UiToolbarComponent,
    UiNotificationComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    UiConfirmationDialogComponent,
    UiSidenavComponent,
    UiToolbarComponent,
    UiNotificationComponent,
  ],
})
export class SharedUiModule {}
