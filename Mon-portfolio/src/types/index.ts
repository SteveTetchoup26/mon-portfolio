/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IExperience {
  id: number;
  image_company_url: string;
  job_title: string;
  company: string;
  description: string;
  start_date: string;
  end_date: string;
}

export interface IWork {
  id: number;
  title: string;
  subtitle: string;
  publication_date: Date;
  description: string;
  link: string;
  is_finished: boolean;
  main_image: string;
  images: any[];
}