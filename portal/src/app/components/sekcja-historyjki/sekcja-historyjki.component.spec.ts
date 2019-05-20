import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaHistoryjkiComponent } from './sekcja-historyjki.component';

describe('SekcjaHistoryjkiComponent', () => {
  let component: SekcjaHistoryjkiComponent;
  let fixture: ComponentFixture<SekcjaHistoryjkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaHistoryjkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaHistoryjkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
