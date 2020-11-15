import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CocPageComponent } from './coc-page.component';

describe('CocPageComponent', () => {
  let component: CocPageComponent;
  let fixture: ComponentFixture<CocPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CocPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
