export interface SummaryItem {
  ID: string;
  orderIndex: number;
  staffID: string;
  dayID: string;
  coordinate?: number[];
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
