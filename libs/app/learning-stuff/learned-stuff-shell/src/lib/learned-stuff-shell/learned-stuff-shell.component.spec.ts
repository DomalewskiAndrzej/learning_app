import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnedStuffShellComponent } from './learned-stuff-shell.component';

describe('LearnedStuffShellComponent', () => {
  let component: LearnedStuffShellComponent;
  let fixture: ComponentFixture<LearnedStuffShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnedStuffShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnedStuffShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
