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
import { UiLoadItemsButtonComponent } from './ui-load-items-button/ui-load-items-button.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedDomainModule } from '@app/shared/domain';

@NgModule({
  declarations: [
    UiConfirmationDialogComponent,
    UiSidenavComponent,
    UiToolbarComponent,
    UiNotificationComponent,
    UiLoadItemsButtonComponent,
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
    MatProgressBarModule,
    SharedDomainModule,
  ],
  exports: [
    UiConfirmationDialogComponent,
    UiSidenavComponent,
    UiToolbarComponent,
    UiNotificationComponent,
    UiLoadItemsButtonComponent,
  ],
})
export class SharedUiModule {}
