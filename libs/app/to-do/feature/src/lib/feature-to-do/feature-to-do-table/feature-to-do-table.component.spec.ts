import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureToDoTableComponent } from './feature-to-do-table.component';

describe('ToDoComponent', () => {
  let component: FeatureToDoTableComponent;
  let fixture: ComponentFixture<FeatureToDoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureToDoTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureToDoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
