import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSidenavComponent } from './ui-sidenav/ui-sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UiSidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [UiSidenavComponent],
})
export class SharedUiSidenavModule {}
