import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTodoPreviewComponent } from './ui-to-do-preview.component';

describe('UiTodoPreviewDialogComponent', () => {
  let component: UiTodoPreviewComponent;
  let fixture: ComponentFixture<UiTodoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTodoPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTodoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
