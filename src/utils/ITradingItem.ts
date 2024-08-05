import {ITradingStatLead} from "./ITradingStatLead";
import {ITradingStatPerformance} from "./ITradingStatPerformance";

export interface ITradingItem {
  expanded: boolean,
  address: string,
  pnl: number,
  followers: number,
  roi: number,
  lead: ITradingStatLead,
  performance: ITradingStatPerformance
}
