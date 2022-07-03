import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTodoAddDialogComponent } from './ui-todo-add-dialog.component';

describe('UiTodoAddDialogComponent', () => {
  let component: UiTodoAddDialogComponent;
  let fixture: ComponentFixture<UiTodoAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTodoAddDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTodoAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
