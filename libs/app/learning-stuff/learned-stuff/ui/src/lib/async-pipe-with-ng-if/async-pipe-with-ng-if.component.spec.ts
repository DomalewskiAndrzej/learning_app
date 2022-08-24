import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeWithNgIfComponent } from './async-pipe-with-ng-if.component';

describe('AsyncPipeWithNgIfComponent', () => {
  let component: AsyncPipeWithNgIfComponent;
  let fixture: ComponentFixture<AsyncPipeWithNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncPipeWithNgIfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncPipeWithNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
