import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEchart3Component } from './new-echart3.component';

describe('NewEchart3Component', () => {
  let component: NewEchart3Component;
  let fixture: ComponentFixture<NewEchart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEchart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEchart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
