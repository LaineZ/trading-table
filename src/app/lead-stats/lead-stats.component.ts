import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ITradingStatLead} from "../../utils/ITradingStatLead";

@Component({
  selector: 'app-lead-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lead-stats.component.html',
  styleUrls: ['./lead-stats.component.scss']
})
export class LeadStatsComponent {
  @Input() lead!: ITradingStatLead;

  isNegative() {
    if (this.lead.copier_pnl.startsWith("-")) {
      return "negative";
    } else {
      return "positive";
    }
  }
}
