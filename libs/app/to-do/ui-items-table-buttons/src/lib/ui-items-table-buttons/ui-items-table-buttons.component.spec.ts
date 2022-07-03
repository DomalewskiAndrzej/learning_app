import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiItemsTableButtonsComponent } from './ui-items-table-buttons.component';

describe('UiItemsTableButtonsComponent', () => {
  let component: UiItemsTableButtonsComponent;
  let fixture: ComponentFixture<UiItemsTableButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiItemsTableButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiItemsTableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
