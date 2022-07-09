import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToDoTableButtonsComponent } from './ui-to-do-table-buttons.component';

describe('UiItemsTableButtonsComponent', () => {
  let component: UiToDoTableButtonsComponent;
  let fixture: ComponentFixture<UiToDoTableButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiToDoTableButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiToDoTableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
