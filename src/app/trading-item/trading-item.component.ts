import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-trading-item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trading-item.component.html',
  styleUrls: ['./trading-item.component.scss']
})
export class TradingItemComponent {
  expanded = false;
}
