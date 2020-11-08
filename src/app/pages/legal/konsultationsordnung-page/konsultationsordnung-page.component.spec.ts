import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsultationsordnungPageComponent } from './konsultationsordnung-page.component';

describe('KonsultationsordnungPageComponent', () => {
  let component: KonsultationsordnungPageComponent;
  let fixture: ComponentFixture<KonsultationsordnungPageComponent>;

  beforeEach(async(() => {
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
