import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumBarComponent } from './num-bar.component';

describe('NumBarComponent', () => {
  let component: NumBarComponent;
  let fixture: ComponentFixture<NumBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
