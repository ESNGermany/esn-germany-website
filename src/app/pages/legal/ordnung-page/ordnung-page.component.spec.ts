import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrdnungPageComponent } from './ordnung-page.component';

describe('OrdnungPageComponent', () => {
  let component: OrdnungPageComponent;
  let fixture: ComponentFixture<OrdnungPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OrdnungPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdnungPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
