import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdMap } from './sandian.component';

describe('SdMap', () => {
  let component: SdMap;
  let fixture: ComponentFixture<SdMap>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdMap ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
