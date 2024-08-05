import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ITradingItem} from "../../utils/ITradingItem";
import {LeadStatsComponent} from "../lead-stats/lead-stats.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-trading-table',
  standalone: true,
  imports: [CommonModule, LeadStatsComponent],
  templateUrl: './trading-table.component.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, maxHeight: '0', overflow: 'hidden' })),
      state('*', style({ opacity: 1, maxHeight: '30em' })),
      transition(':enter, :leave', [
        animate(150)
      ])
    ])
  ],
  styleUrls: ['./trading-table.component.scss']
})
export class TradingTableComponent {
  items: Array<ITradingItem> = [
    {
      address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
      expanded: false,
      pnl: 0.2423423535465456464776,
      roi: 100,
      followers: 100,
      lead: {
        copy_amount_min: 0,
        copy_amount_max: 3000,
        copier_pnl: "1591894,5184.49",
        leading_margin_balance: "1000",
        profit_sharing: 10.01,
        aum: "1,832,748.98"
      }
    },
    {
      address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
      expanded: false,
      pnl: 0.2423423535465456464776,
      roi: 100,
      followers: 100,
      lead: {
        copy_amount_min: 0,
        copy_amount_max: 3000,
        copier_pnl: "-1591894,5184.49",
        leading_margin_balance: "1000",
        profit_sharing: 10.01,
        aum: "1,832,748.98"
      }
    }
  ];


  toga(index: number) {
    this.items[index].expanded = !this.items[index].expanded;

    setTimeout(() => {
      if (this.items[index].expanded) {
        const element = document.querySelector("#detail_" + index);
        element?.scrollIntoView({
          block: "center",
          behavior: "smooth"
        });
      }
    }, 150);
  }
}
