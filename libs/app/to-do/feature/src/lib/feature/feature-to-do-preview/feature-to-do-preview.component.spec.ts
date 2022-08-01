import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureToDoPreviewComponent } from './feature-to-do-preview.component';

describe('FeatureToDoPreviewComponent', () => {
  let component: FeatureToDoPreviewComponent;
  let fixture: ComponentFixture<FeatureToDoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureToDoPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureToDoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
