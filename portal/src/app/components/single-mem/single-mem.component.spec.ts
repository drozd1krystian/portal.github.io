import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMemComponent } from './single-mem.component';

describe('SingleMemComponent', () => {
  let component: SingleMemComponent;
  let fixture: ComponentFixture<SingleMemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
