import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  MoveLineMap } from './new-echarts.component';

describe(' MoveLineMap', () => {
  let component:  MoveLineMap;
  let fixture: ComponentFixture< MoveLineMap>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  MoveLineMap ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( MoveLineMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
