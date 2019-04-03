import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDataComponent } from './current-data.component';

describe('CurrentDataComponent', () => {
  let component: CurrentDataComponent;
  let fixture: ComponentFixture<CurrentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
