import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPreviewComponent } from './to-do-preview/to-do-preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedDomainModule } from '@app/shared/domain';

@NgModule({
  declarations: [TodoPreviewComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, SharedDomainModule],
  exports: [TodoPreviewComponent],
})
export class TodoPreviewUiModule {}
