import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnedStuffFeatureComponent } from './learned-stuff-feature.component';

describe('LearnedStuffFeatureComponent', () => {
  let component: LearnedStuffFeatureComponent;
  let fixture: ComponentFixture<LearnedStuffFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnedStuffFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnedStuffFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
