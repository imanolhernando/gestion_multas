import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultarComponent } from './multar.component';

describe('MultarComponent', () => {
  let component: MultarComponent;
  let fixture: ComponentFixture<MultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
