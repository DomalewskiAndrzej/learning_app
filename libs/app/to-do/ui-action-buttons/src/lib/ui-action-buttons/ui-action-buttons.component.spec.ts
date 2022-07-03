import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiActionButtonsComponent } from './ui-action-buttons.component';

describe('UiActionButtonsComponent', () => {
  let component: UiActionButtonsComponent;
  let fixture: ComponentFixture<UiActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiActionButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
