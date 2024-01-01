export interface IFreelancer {
  _id: string;
  user_account: UserAccount;
  location: string;
  overview: string;
  skills: Skill[];
  employment_history: any[];
  language: string;
  country: string;
  title: string;
  experience: string;
  education: string;
  description: string;
  hourly_rate: number;
  address: string;
  phone: string;
  savedJobs: any[];
  __v: number;
}

export interface IUserAccount {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  role: string;
  password: string;
  avatar: string;
  __v: number;
}

export interface ISkill {
  _id: string;
  skill_name: string;
  __v: number;
}
