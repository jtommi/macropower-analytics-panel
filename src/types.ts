export interface AnalyticsOptions {
  server: string;
  key: string;
  description: string;
  hidden: boolean;
  postEnd: boolean;
  cors: boolean;
}

export const defaults: AnalyticsOptions = {
  server: '',
  description: '',
  key: '',
  hidden: false,
  postEnd: true,
  cors: true,
};
