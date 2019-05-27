import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzegladMemowComponent } from './przeglad-memow.component';

describe('PrzegladMemowComponent', () => {
  let component: PrzegladMemowComponent;
  let fixture: ComponentFixture<PrzegladMemowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzegladMemowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzegladMemowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
