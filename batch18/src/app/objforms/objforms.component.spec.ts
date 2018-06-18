import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjformsComponent } from './objforms.component';

describe('ObjformsComponent', () => {
  let component: ObjformsComponent;
  let fixture: ComponentFixture<ObjformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
