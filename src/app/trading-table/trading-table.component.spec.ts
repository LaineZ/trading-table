import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingTableComponent } from './trading-table.component';

describe('TradingTableComponent', () => {
  let component: TradingTableComponent;
  let fixture: ComponentFixture<TradingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TradingTableComponent]
    });
    fixture = TestBed.createComponent(TradingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
