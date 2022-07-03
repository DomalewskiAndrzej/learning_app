import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiItemsTableComponent } from './ui-items-table.component';

describe('UiItemsTableComponent', () => {
  let component: UiItemsTableComponent;
  let fixture: ComponentFixture<UiItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiItemsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
