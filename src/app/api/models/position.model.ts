export interface PositionItem {
  ID?: string;
  placeIndex: number;
  staffID: string;
  dayID?: string;
  coordinates?: number[];
  initials?: string;
  pickingNext?: boolean;
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
