import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastQuarterComponent } from './last-quarter.component';

describe('LastQuarterComponent', () => {
  let component: LastQuarterComponent;
  let fixture: ComponentFixture<LastQuarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastQuarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastQuarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
