export type ApiParams<TData> = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: TData | null;
  params?: TData | null;
  contentType?: 'application/json' | 'multipart/form-data'
}