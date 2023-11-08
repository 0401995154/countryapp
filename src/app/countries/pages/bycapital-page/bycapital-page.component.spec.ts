import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycapitalPageComponent } from './bycapital-page.component';

describe('BycapitalPageComponent', () => {
  let component: BycapitalPageComponent;
  let fixture: ComponentFixture<BycapitalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BycapitalPageComponent]
    });
    fixture = TestBed.createComponent(BycapitalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
