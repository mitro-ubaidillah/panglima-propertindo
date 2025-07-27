export type StatusFeedbackType = 
| "waiting"
| "resolved"
| "in_progress"
| "pending";

export interface FeedbackResponse {
  id: number;
  category: string;
  sub_category: string;
  unit: string;
  status: StatusFeedbackType;
  keluhan: string;
  created_at: string;
}