export interface DayItem {
  ID: string;
  date: string | Date;
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