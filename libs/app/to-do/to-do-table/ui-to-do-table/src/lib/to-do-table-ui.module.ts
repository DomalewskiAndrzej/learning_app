import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { TodoTableComponent } from './to-do-table/to-do-table.component';
import { TodoTableButtonsComponent } from './to-do-table-buttons/to-do-table-buttons.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { SharedDomainModule } from '@app/shared/domain';

@NgModule({
  declarations: [
    ActionButtonsComponent,
    TodoTableComponent,
    TodoTableButtonsComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatIconModule,
    SharedDomainModule,
  ],
  exports: [
    ActionButtonsComponent,
    TodoTableComponent,
    TodoTableButtonsComponent,
  ],
})
export class TodoTableUiModule {}
