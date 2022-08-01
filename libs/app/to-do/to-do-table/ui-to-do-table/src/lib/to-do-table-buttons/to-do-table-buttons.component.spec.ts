import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTableButtonsComponent } from './to-do-table-buttons.component';

describe('UiItemsTableButtonsComponent', () => {
  let component: TodoTableButtonsComponent;
  let fixture: ComponentFixture<TodoTableButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTableButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoTableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
