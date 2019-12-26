import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XyLineComponent } from './xy-line.component';

describe('XyLineComponent', () => {
  let component: XyLineComponent;
  let fixture: ComponentFixture<XyLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XyLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
