import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutShellComponent } from './layout-shell/layout-shell.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedLayoutShellRoutingModule } from './shared-layout-shell-routing.module';
import { NotificationsFacade } from '@app/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedLayoutShellRoutingModule,
  ],
  declarations: [LayoutShellComponent],
  providers: [NotificationsFacade],
})
export class SharedLayoutShellModule {}
