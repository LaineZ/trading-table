import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ITradingItem} from "../../utils/ITradingItem";

@Component({
  selector: 'app-performance-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-stats.component.html',
  styleUrls: ['./performance-stats.component.scss']
})
export class PerformanceStatsComponent {
  @Input() stat!: ITradingItem;

  isNegativeROI() {
    if (this.stat.roi < 0) {
      return "negative";
    } else {
      return "positive";
    }
  }

  isNegativePnl() {
    if (this.stat.performance.pnl < 0) {
      return "negative";
    } else {
      return "positive";
    }
  }
}
