import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  declarations: [UiToolbarComponent],
  exports: [UiToolbarComponent],
})
export class SharedUiToolbarModule {}
