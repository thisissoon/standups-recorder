export interface SummaryItem {
  ID: string;
  orderIndex: number;
  staffID: string;
  dayID: string;
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
