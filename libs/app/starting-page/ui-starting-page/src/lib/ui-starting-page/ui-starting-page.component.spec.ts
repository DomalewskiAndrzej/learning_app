import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStartingPageComponent } from './ui-starting-page.component';

describe('UiStartingPageComponent', () => {
  let component: UiStartingPageComponent;
  let fixture: ComponentFixture<UiStartingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiStartingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiStartingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
