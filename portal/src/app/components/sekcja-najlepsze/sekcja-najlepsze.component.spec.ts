import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaNajlepszeComponent } from './sekcja-najlepsze.component';

describe('SekcjaNajlepszeComponent', () => {
  let component: SekcjaNajlepszeComponent;
  let fixture: ComponentFixture<SekcjaNajlepszeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaNajlepszeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaNajlepszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
