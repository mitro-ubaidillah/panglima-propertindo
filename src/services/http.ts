// src/services/clients/http.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Define base API response structure
export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
}

// Define error response structure
export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

// Base configuration
const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

// Create axios instance
const apiClient: AxiosInstance = axios.create(baseConfig);

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log('API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        baseURL: config.baseURL,
        data: config.data,
        params: config.params,
      });
    }

    // Add timestamp to prevent caching for GET requests
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log('API Response:', {
        status: response.status,
        statusText: response.statusText,
        url: response.config.url,
        data: response.data,
      });
    }

    return response;
  },
  (error: AxiosError<ApiErrorResponse>) => {
    // Handle different error types
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      console.error('❌ API Error Response:', {
        status,
        message: data?.message || error.message,
        url: error.config?.url,
        errors: data?.errors,
      });

      // Handle specific status codes
      switch (status) {
        case 400:
          console.error('Bad Request - Check your request data');
          break;
        case 404:
          console.error('Not Found - The requested resource was not found');
          break;
        case 422:
          console.error('Validation Error - Check your input data');
          break;
        case 500:
          console.error('Internal Server Error - Something went wrong on the server');
          break;
        default:
          console.error(`HTTP Error ${status}: ${error.message}`);
      }
    } else if (error.request) {
      // Network error
      console.error('Network Error:', error.message);
    } else {
      // Other error
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// Helper function to create different configurations for specific endpoints
export const createApiClient = (customConfig?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    ...baseConfig,
    ...customConfig,
  });
};

// Export the main client
export default apiClient;

// Utility functions for common HTTP methods with proper typing
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> =>
    apiClient.get<ApiResponse<T>>(url, config),
    
  post: <TData, TResponse = TData>(
    url: string, 
    data?: TData, 
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<TResponse>>> =>
    apiClient.post<ApiResponse<TResponse>>(url, data, config),
    
  put: <TData, TResponse = TData>(
    url: string, 
    data?: TData, 
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<TResponse>>> =>
    apiClient.put<ApiResponse<TResponse>>(url, data, config),
    
  patch: <TData, TResponse = TData>(
    url: string, 
    data?: TData, 
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<TResponse>>> =>
    apiClient.patch<ApiResponse<TResponse>>(url, data, config),
    
  delete: <T = void>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> =>
    apiClient.delete<ApiResponse<T>>(url, config),
};

// Enhanced error handler utility with proper typing
export const handleApiError = (error: AxiosError<ApiErrorResponse>): ApiErrorResponse => {
  if (error.response) {
    // Extract error message from response
    const data = error.response.data;
    return {
      success: false,
      status: error.response.status,
      message: data?.message || error.response.statusText || 'An error occurred',
      errors: data?.errors,
    };
  } else if (error.request) {
    return {
      success: false,
      status: 0,
      message: 'Network error - please check your connection',
    };
  } else {
    return {
      success: false,
      status: 0,
      message: error.message || 'An unexpected error occurred',
    };
  }
};

// Utility for handling async operations with error handling
export const safeApiCall = async <T>(
  apiFunction: () => Promise<AxiosResponse<ApiResponse<T>>>
): Promise<{ data: T | null; error: ApiErrorResponse | null }> => {
  try {
    const response = await apiFunction();
    return { data: response.data.data, error: null };
  } catch (error) {
    const apiError = handleApiError(error as AxiosError<ApiErrorResponse>);
    return { data: null, error: apiError };
  }
};