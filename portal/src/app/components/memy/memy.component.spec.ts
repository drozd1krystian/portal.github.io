import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemyComponent } from './memy.component';

describe('MemyComponent', () => {
  let component: MemyComponent;
  let fixture: ComponentFixture<MemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
