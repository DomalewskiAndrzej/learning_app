import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTodoPreviewDialogComponent } from './ui-todo-preview-dialog.component';

describe('UiTodoPreviewDialogComponent', () => {
  let component: UiTodoPreviewDialogComponent;
  let fixture: ComponentFixture<UiTodoPreviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTodoPreviewDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTodoPreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
