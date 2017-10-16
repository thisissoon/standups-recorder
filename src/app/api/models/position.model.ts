export interface PositionItem {
  ID: string;
  placeIndex: number;
  staffID: string;
  dayID: string;
}

export interface PositionsResponse {
  currentPage: number;
  limit: number;
  pages: number;
  total: number;
  _embedded: {
    positions: PositionItem[];
  };
}
