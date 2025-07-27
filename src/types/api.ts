// src/types/api.ts

// Base API response structure
export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
}

// Pagination response
export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    current_page: number;
    per_page: number;
    total: number;
    total_pages: number;
    has_next_page: boolean;
    has_prev_page: boolean;
  };
  message?: string;
}

// Error response structure
export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

// HTTP Methods type
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// Request config with custom properties
export interface CustomRequestConfig {
  skipAuth?: boolean;
  timeout?: number;
  retries?: number;
}

// API operation result
export interface ApiResult<T> {
  data: T | null;
  error: ApiErrorResponse | null;
  loading?: boolean;
}

// Query parameters for search/filter
export interface BaseQueryParams {
  page?: number;
  limit?: number;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
  search?: string;
}

// File upload response
export interface FileUploadResponse {
  id: string;
  filename: string;
  original_name: string;
  url: string;
  size: number;
  mime_type: string;
  uploaded_at: string;
}