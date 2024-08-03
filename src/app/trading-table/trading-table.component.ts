import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TradingItemComponent} from "../trading-item/trading-item.component";

@Component({
  selector: 'app-trading-table',
  standalone: true,
  imports: [CommonModule, TradingItemComponent],
  templateUrl: './trading-table.component.html',
  styleUrls: ['./trading-table.component.scss']
})
export class TradingTableComponent {

}
