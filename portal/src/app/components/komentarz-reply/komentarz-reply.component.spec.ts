import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarzReplyComponent } from './komentarz-reply.component';

describe('KomentarzReplyComponent', () => {
  let component: KomentarzReplyComponent;
  let fixture: ComponentFixture<KomentarzReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarzReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarzReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
