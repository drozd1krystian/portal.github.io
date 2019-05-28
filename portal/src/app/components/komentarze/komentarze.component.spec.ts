import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarzeComponent } from './komentarze.component';

describe('KomentarzeComponent', () => {
  let component: KomentarzeComponent;
  let fixture: ComponentFixture<KomentarzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
