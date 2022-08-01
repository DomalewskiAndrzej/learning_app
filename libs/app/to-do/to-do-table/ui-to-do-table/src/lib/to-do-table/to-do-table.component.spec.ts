import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTableComponent } from './to-do-table.component';

describe('UiItemsTableComponent', () => {
  let component: TodoTableComponent;
  let fixture: ComponentFixture<TodoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
