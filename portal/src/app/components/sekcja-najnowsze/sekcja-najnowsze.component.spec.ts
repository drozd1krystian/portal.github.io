import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaNajnowszeComponent } from './sekcja-najnowsze.component';

describe('SekcjaNajnowszeComponent', () => {
  let component: SekcjaNajnowszeComponent;
  let fixture: ComponentFixture<SekcjaNajnowszeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaNajnowszeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaNajnowszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
