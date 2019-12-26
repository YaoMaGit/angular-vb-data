import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdLineMap } from './echartsindex.component';

describe('SdLineMap', () => {
  let component: SdLineMap;
  let fixture: ComponentFixture<SdLineMap>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdLineMap ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdLineMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
