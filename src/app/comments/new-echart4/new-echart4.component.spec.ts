import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEchart4Component } from './new-echart4.component';

describe('NewEchart4Component', () => {
  let component: NewEchart4Component;
  let fixture: ComponentFixture<NewEchart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEchart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEchart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
