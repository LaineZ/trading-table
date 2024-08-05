import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotStatsComponent } from './plot-stats.component';

describe('PlotStatsComponent', () => {
  let component: PlotStatsComponent;
  let fixture: ComponentFixture<PlotStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlotStatsComponent]
    });
    fixture = TestBed.createComponent(PlotStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
