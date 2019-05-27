import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekcjaAdminComponent } from './sekcja-admin.component';

describe('SekcjaAdminComponent', () => {
  let component: SekcjaAdminComponent;
  let fixture: ComponentFixture<SekcjaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekcjaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekcjaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
