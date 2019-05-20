import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaZwierzetaComponent } from './sekcja-zwierzeta.component';

describe('SekcjaZwierzetaComponent', () => {
  let component: SekcjaZwierzetaComponent;
  let fixture: ComponentFixture<SekcjaZwierzetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaZwierzetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaZwierzetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
