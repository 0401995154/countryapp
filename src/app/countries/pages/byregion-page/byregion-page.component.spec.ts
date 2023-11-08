import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByregionPageComponent } from './byregion-page.component';

describe('ByregionPageComponent', () => {
  let component: ByregionPageComponent;
  let fixture: ComponentFixture<ByregionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByregionPageComponent]
    });
    fixture = TestBed.createComponent(ByregionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
