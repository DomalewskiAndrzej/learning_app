import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoAddEditDialogComponent } from './to-do-add-edit-dialog.component';

describe('UiToDoAddEditDialogComponent', () => {
  let component: TodoAddEditDialogComponent;
  let fixture: ComponentFixture<TodoAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoAddEditDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
