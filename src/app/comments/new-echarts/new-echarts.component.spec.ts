import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEChartsComponent } from './new-echarts.component';

describe('NewEChartsComponent', () => {
  let component: NewEChartsComponent;
  let fixture: ComponentFixture<NewEChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
