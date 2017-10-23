export interface PositionItem {
  ID: string;
  placeIndex: number;
  staffID: string;
  dayID: string;
  coordinate?: number[];
  firstName?: string;
  lastName?: string;
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
