import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatesComponent } from './form-states.component';

describe('FormStatesComponent', () => {
  let component: FormStatesComponent;
  let fixture: ComponentFixture<FormStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
