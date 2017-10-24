export interface DayItem {
  ID: string | null;
  date: string | Date | null;
}

export interface DaysResponse {
  currentPage: number;
  limit: number;
  pages: number;
  total: number;
  _embedded: {
    days: DayItem[];
  };
}
