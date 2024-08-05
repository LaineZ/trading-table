import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceStatsComponent } from './performance-stats.component';

describe('PerformanceStatsComponent', () => {
  let component: PerformanceStatsComponent;
  let fixture: ComponentFixture<PerformanceStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PerformanceStatsComponent]
    });
    fixture = TestBed.createComponent(PerformanceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
