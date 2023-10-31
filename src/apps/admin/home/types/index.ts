type MonthlyRecord = {
  month: string;
  total_check_ins: number;
  branches_share: number;
  total_visits_share: number;
  branches_total_income: number;
};

type Branch = {
  branch_id: number;
  branch_name: string;
  rating: string;
  rating_count: number;
  check_ins_this_month: number;
  check_ins_total: number;
  thumb_url: {
    original: string;
    "1x": string;
    "2x": string;
    "3x": string;
    "1x-web": string;
    "2x-web": string;
    "3x-web": string;
  };
  months: string[];
  data: number[];
};

export type HomeTypes = {
  ar_name: string;
  en_name: string;
  bank: null;
  iban: null;
  commercial_record_number: null;
  one_pass_agreement_date: string;
  monthly_check_ins: number | 0;
  today_check_ins: number | 0;
  prev_month_check_ins: number | 0;
  monthly_sales: number | 0;
  total_sales: number | 0;
  prev_month_sales: number | 0;
  fair_share_monthly_records: MonthlyRecord[];
  branches: Branch[];
};

export type SummaryCardType = {
  Icon: any;
  title: string;
  content: string;
  iconColor?: string;
  bgColor?: string;
};

export type BranchName = {
  branch_name: string;
};
