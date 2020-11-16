import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EppPageComponent } from './epp-page.component';

describe('EppPageComponent', () => {
  let component: EppPageComponent;
  let fixture: ComponentFixture<EppPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EppPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
