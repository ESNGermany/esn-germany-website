import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NetworkPageComponent } from './network-page.component';

describe('NetworkPageComponent', () => {
  let component: NetworkPageComponent;
  let fixture: ComponentFixture<NetworkPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
