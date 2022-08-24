import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedDomainModule } from '@app/shared/domain';
import { UiSidenavComponent } from './ui-sidenav/ui-sidenav.component';
import { UiNotificationComponent } from './ui-notification/ui-notification.component';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { SharedUiModule } from '@app/app-shared-ui';
import { MatButtonModule } from '@angular/material/button';
import { NotificationsContentProjectionDirective } from './directives/notifications-content-projection.directive';
import { NotificationTemplatesComponent } from './notification-templates/notification-templates.component';

@NgModule({
  declarations: [
    UiSidenavComponent,
    UiToolbarComponent,
    UiNotificationComponent,
    NotificationsContentProjectionDirective,
    NotificationTemplatesComponent,
  ],
  imports: [
    CommonModule,
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
    SharedUiModule,
    MatButtonModule,
  ],
  exports: [UiSidenavComponent, UiToolbarComponent, UiNotificationComponent],
})
export class SharedLayoutUiModule {}
