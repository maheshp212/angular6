import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjformComponent } from './objform.component';

describe('ObjformComponent', () => {
  let component: ObjformComponent;
  let fixture: ComponentFixture<ObjformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
