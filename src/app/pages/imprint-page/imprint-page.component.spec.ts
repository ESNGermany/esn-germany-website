import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImprintPageComponent } from './imprint-page.component';

describe('ImprintPageComponent', () => {
  let component: ImprintPageComponent;
  let fixture: ComponentFixture<ImprintPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImprintPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
