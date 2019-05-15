import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidColumnComponent } from './mid-column.component';

describe('MidColumnComponent', () => {
  let component: MidColumnComponent;
  let fixture: ComponentFixture<MidColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
