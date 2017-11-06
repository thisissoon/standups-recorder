import { DayItem, PositionItem, SummaryItem} from '.';

export interface StandupItem {
  date: string;
  positions: PositionItem[];
  summaries: SummaryItem[];
}
