import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSidenavComponent } from './ui-sidenav.component';

describe('NavbarComponent', () => {
  let component: UiSidenavComponent;
  let fixture: ComponentFixture<UiSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSidenavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
