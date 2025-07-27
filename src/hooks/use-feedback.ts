import { FeedbackService } from "@/services/feedback";
import { useQuery } from "@tanstack/react-query";

export const useFeedback = () => {
  // const queryClient = useQueryClient();

  const useGetFeedback = () => {
    return useQuery({
      queryKey: ["feedback"],
      queryFn: () => FeedbackService.getFeedback(),
      staleTime: 5 * 60 * 100,
      gcTime: 10 * 60 * 1000,
      refetchOnMount: true,
    })
  }

  const useGetFeedbackCategory = () => {
    return useQuery({
      queryKey: ["category"],
      queryFn: () => FeedbackService.getFeedbackCategory(),
      staleTime: 5 * 60 * 100,
      gcTime: 10 * 60 * 1000,
      refetchOnMount: true,
    })
  }

  return {
    useGetFeedback,
    useGetFeedbackCategory
  };
}
