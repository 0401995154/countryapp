import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycountryPageComponent } from './bycountry-page.component';

describe('BycountryPageComponent', () => {
  let component: BycountryPageComponent;
  let fixture: ComponentFixture<BycountryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BycountryPageComponent]
    });
    fixture = TestBed.createComponent(BycountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
