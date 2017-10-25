export interface StaffMemberItem {
  ID: string;
  firstName: number;
  lastName: string;
  role: string;
  current: boolean;
  selected?: boolean;
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
