import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KonsultationsordnungPageComponent } from './konsultationsordnung-page.component';

describe('KonsultationsordnungPageComponent', () => {
  let component: KonsultationsordnungPageComponent;
  let fixture: ComponentFixture<KonsultationsordnungPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [KonsultationsordnungPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsultationsordnungPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
