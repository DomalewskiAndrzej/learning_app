import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToDoTableComponent } from './ui-to-do-table.component';

describe('UiItemsTableComponent', () => {
  let component: UiToDoTableComponent;
  let fixture: ComponentFixture<UiToDoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiToDoTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiToDoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
