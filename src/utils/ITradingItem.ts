import {ITradingStatLead} from "./ITradingStatLead";

export interface ITradingItem {
  expanded: boolean,
  address: string,
  pnl: number,
  followers: number,
  roi: number,
  lead: ITradingStatLead
}
