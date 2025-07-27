import { DefaultOptions, QueryClient } from '@tanstack/react-query';

// Default options for React Query
const queryConfig: DefaultOptions = {
  queries: {
    // Time before data is considered stale (5 minutes)
    staleTime: 5 * 60 * 1000,
    
    // Time before inactive queries are garbage collected (10 minutes) 
    gcTime: 10 * 60 * 1000,
    
    // Retry failed requests 3 times
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors (client errors)
      if (error && typeof error === 'object' && 'response' in error) {
        const status = (error as { response: { status: number } }).response?.status;
        if (status && status >= 400 && status < 500) {
          return false;
        }
      }
      return failureCount < 3;
    },
    
    // Retry delay with exponential backoff
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    
    // Refetch on window focus (disabled by default)
    refetchOnWindowFocus: false,
    
    // Refetch on reconnect
    refetchOnReconnect: true,
    
    // Refetch on mount if data is stale
    refetchOnMount: true,
  },
  mutations: {
    // Retry mutations once
    retry: 1,
    
    // Retry delay for mutations
    retryDelay: 1000,
  },
};

// Create the query client
export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

// Error handler for global error handling
export const handleQueryError = (error: Error) => {
  console.error('React Query Error:', error);
  
  // You can add global error handling here
  // For example: show toast notifications, redirect to error page, etc.
  
  // Example: Show toast notification (you'll need to implement your toast system)
  // toast.error(error.message || 'Something went wrong');
};

// Set global error handler
queryClient.setMutationDefaults(['facilities'], {
  onError: handleQueryError,
});