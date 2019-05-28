import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarzadzanieUseramiComponent } from './zarzadzanie-userami.component';

describe('ZarzadzanieUseramiComponent', () => {
  let component: ZarzadzanieUseramiComponent;
  let fixture: ComponentFixture<ZarzadzanieUseramiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZarzadzanieUseramiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarzadzanieUseramiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
