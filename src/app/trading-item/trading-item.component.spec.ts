import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingItemComponent } from './trading-item.component';

describe('TradingItemComponent', () => {
  let component: TradingItemComponent;
  let fixture: ComponentFixture<TradingItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TradingItemComponent]
    });
    fixture = TestBed.createComponent(TradingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
