import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoShellComponent } from './to-do-shell.component';

describe('ToDoShellComponent', () => {
  let component: ToDoShellComponent;
  let fixture: ComponentFixture<ToDoShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
