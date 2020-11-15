import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionmapComponent } from './sectionmap.component';

describe('SectionmapComponent', () => {
  let component: SectionmapComponent;
  let fixture: ComponentFixture<SectionmapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SectionmapComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
