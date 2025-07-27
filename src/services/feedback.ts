import { FeedbackCategoryResponse, FeedbackDataType, FeedbackResponse, FeedbackSubcategoryResponse } from "@/types/feedback";
import { apiService } from "./http";

export class FeedbackService {
  static async getFeedback(): Promise<FeedbackResponse[]> {
    const { data } =  await apiService<unknown, FeedbackResponse[]>({
      method: "GET",
      url: "/feedback",
    });

    return data;
  }

  static async getFeedbackCategory(): Promise<FeedbackCategoryResponse[]> {
    const { data } =  await apiService<unknown, FeedbackCategoryResponse[]>({
      method: "GET",
      url: "/feedback-category",
    });

    return data;
  }

  static async getFeedbackSubcategory(id_category: string): Promise<FeedbackSubcategoryResponse[]> {
    const { data } =  await apiService<unknown, FeedbackSubcategoryResponse[]>({
      method: "GET",
      url: `/feedback-sub-category?id_category=${id_category}`,
    });

    return data;
  }

  static async createFeedback(body: FeedbackDataType): Promise<FeedbackResponse> {
    const { data } =  await apiService<FeedbackDataType, FeedbackResponse>({
      method: "POST",
      url: '/feedback',
      data: body
    });

    return data;
  }
}