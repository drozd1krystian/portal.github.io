import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarzOdpowiedziComponent } from './komentarz-odpowiedzi.component';

describe('KomentarzOdpowiedziComponent', () => {
  let component: KomentarzOdpowiedziComponent;
  let fixture: ComponentFixture<KomentarzOdpowiedziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarzOdpowiedziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarzOdpowiedziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
