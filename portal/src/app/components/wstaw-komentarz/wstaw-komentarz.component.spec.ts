import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WstawKomentarzComponent } from './wstaw-komentarz.component';

describe('WstawKomentarzComponent', () => {
  let component: WstawKomentarzComponent;
  let fixture: ComponentFixture<WstawKomentarzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WstawKomentarzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WstawKomentarzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
