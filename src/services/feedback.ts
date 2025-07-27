import { FeedbackCategoryResponse, FeedbackResponse } from "@/types/feedback";
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

  // static async getFeedbackSubcateogries(id_category: number): Promise<FeedbackSubcategoryResponse[]> {
  //   try {
  //     const response = await api.get<FeedbackSubcategoryResponse[]>(`/feedback-sub-category?id_category=${id_category}`);
  //     return response.data.data;
  //   } catch (error) {
  //     const apiError = handleApiError(error as AxiosError<ApiErrorResponse>);
  //     throw new Error(apiError.message);
  //   }
  // }

  // static async createFeedback(data: FeedbackDataType): Promise<FeedbackResponse> {
  //   try {
  //     const response = await api.post<FeedbackDataType, FeedbackResponse>('/feedback', data);
  //     return response.data.data;
  //   } catch (error) {
  //     const apiError = handleApiError(error as AxiosError<ApiErrorResponse>);
  //     throw new Error(apiError.message);
  //   }
  // }
}