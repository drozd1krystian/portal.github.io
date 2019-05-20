import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaNiesmieszneComponent } from './sekcja-niesmieszne.component';

describe('SekcjaNiesmieszneComponent', () => {
  let component: SekcjaNiesmieszneComponent;
  let fixture: ComponentFixture<SekcjaNiesmieszneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaNiesmieszneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaNiesmieszneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
