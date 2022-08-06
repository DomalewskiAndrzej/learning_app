import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLoadItemsButtonComponent } from './ui-load-items-button.component';

describe('UiLoadItemsButtonComponent', () => {
  let component: UiLoadItemsButtonComponent;
  let fixture: ComponentFixture<UiLoadItemsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiLoadItemsButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLoadItemsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
