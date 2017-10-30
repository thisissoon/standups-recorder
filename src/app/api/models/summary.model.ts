export interface SummaryItem {
  ID?: string;
  orderIndex: number;
  staffID: string;
  dayID?: string;
  coordinates?: number[];
}

export interface SummariesResponse {
  currentPage: number;
  limit: number;
  pages: number;
  total: number;
  _embedded: {
    summaries: SummaryItem[];
  };
}
