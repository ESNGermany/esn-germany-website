import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDarkComponent } from './navigation-dark.component';

describe('NavigationDarkComponent', () => {
  let component: NavigationDarkComponent;
  let fixture: ComponentFixture<NavigationDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationDarkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
