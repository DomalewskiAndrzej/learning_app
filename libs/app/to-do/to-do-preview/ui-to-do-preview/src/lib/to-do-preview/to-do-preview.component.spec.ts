import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPreviewComponent } from './to-do-preview.component';

describe('UiTodoPreviewDialogComponent', () => {
  let component: TodoPreviewComponent;
  let fixture: ComponentFixture<TodoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
