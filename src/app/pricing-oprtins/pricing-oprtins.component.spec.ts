import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOprtinsComponent } from './pricing-oprtins.component';

describe('PricingOprtinsComponent', () => {
  let component: PricingOprtinsComponent;
  let fixture: ComponentFixture<PricingOprtinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingOprtinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOprtinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
