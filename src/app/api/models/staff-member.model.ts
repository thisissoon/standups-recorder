export interface StaffMemberItem {
  ID: string;
  firstName: string;
  lastName: string;
  role: string;
  current: boolean;
  selected?: boolean;
  firstStandup?: any;
  totalStandups?: any;
  pickingNext?: boolean;
}

export interface StaffMembersResponse {
  currentPage: number;
  limit: number;
  pages: number;
  total: number;
  _embedded: {
    staffMembers: StaffMemberItem[];
  };
}
