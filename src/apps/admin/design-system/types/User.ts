export type User = {
  id: number;
  first_name: string;
  last_name: string;
  locale: string;
  email: string;
  phone_number: string;
  notes?: null | string;
  created_at: string;
  modules?: any[];
  icon_filename: string;
  icon_url: {
    "1x": string;
    "2x"?: string;
    "3x"?: string;
  };
};
