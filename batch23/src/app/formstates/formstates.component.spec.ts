import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstatesComponent } from './formstates.component';

describe('FormstatesComponent', () => {
  let component: FormstatesComponent;
  let fixture: ComponentFixture<FormstatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormstatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
