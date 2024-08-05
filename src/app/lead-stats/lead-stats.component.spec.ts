import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadStatsComponent } from './lead-stats.component';

describe('LeadStatsComponent', () => {
  let component: LeadStatsComponent;
  let fixture: ComponentFixture<LeadStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeadStatsComponent]
    });
    fixture = TestBed.createComponent(LeadStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
