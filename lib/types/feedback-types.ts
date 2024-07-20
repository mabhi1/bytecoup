type NewFeedbackDbType = {
  name: string;
  companyName: string;
  website?: string;
  designation: string;
  email: string;
  phone?: string;
  overallSatisfaction: number;
  feedback?: string;
  expectationMet: boolean;
  suggestions?: string;
  reConsider: boolean;
  publishable: boolean;
  showOnSite: boolean;
  tokenId: string;
};

export type { NewFeedbackDbType };
