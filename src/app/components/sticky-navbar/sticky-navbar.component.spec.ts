import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNavbarComponent } from './sticky-navbar.component';

describe('StickyNavbarComponent', () => {
  let component: StickyNavbarComponent;
  let fixture: ComponentFixture<StickyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
