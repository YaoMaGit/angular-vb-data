import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEchart5Component } from './new-echart5.component';

describe('NewEchart5Component', () => {
  let component: NewEchart5Component;
  let fixture: ComponentFixture<NewEchart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEchart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEchart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
