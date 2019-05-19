import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaSmieszneComponent } from './sekcja-smieszne.component';

describe('SekcjaSmieszneComponent', () => {
  let component: SekcjaSmieszneComponent;
  let fixture: ComponentFixture<SekcjaSmieszneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaSmieszneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaSmieszneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
