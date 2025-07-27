/**
 * @author @mitro-ubaidillah (Muchamad Mitro Ubaidillah)
 * API service
 */

import { ApiParams } from '@/types/api';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 10000,
}

const instance: AxiosInstance = axios.create(config);

instance.interceptors.response.use(
    (response) => (
      response
    ),
    (error) => {

      if (error.response) {
        console.error(
          JSON.stringify({
            name: '[api][error]',
            detail: error.response?.data
          })
        )
      } else {
        console.error('[error]', error);
      }

      return Promise.reject(error);
    }
  )

instance.interceptors.request.use((req) => {
  const request = req as AxiosRequestConfig;

  request.headers = {
    ...request.headers,
  };

  return req;
});

export const apiService = async <TData = unknown, TResponse = unknown>(
  request: ApiParams<TData>,
): Promise<AxiosResponse<TResponse>> => {
  const { data, method, params, url, contentType } = request;
  const response = await instance({
    url,
    method,
    data,
    params,
    headers: contentType ? { 'Content-Type': contentType } : {}
  });

  return response;
};
