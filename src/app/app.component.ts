import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from "./filter/filter.component";
import {TradingTableComponent} from "./trading-table/trading-table.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FilterComponent, TradingTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trading-table';
}
