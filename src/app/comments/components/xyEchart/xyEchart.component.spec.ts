import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XyEchart } from './xy-echart.component';

describe('XyEchart', () => {
  let component: XyEchart;
  let fixture: ComponentFixture<XyEchart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyEchart ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyEchart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
