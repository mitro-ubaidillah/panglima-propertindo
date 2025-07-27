import { AxiosError } from "axios";

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

export type CategoryTypes = 
| "Unit Bangunan/Kavling"
| "Fasilitas Umum & Lingkungan"
| "Pembayaran"
| "Legal & Akad"

export interface FeedbackCategoryResponse {
  id: number;
  name: CategoryTypes
}

export type SubcategoryTypes = 
| "Dinding"
| "Kusen, Pintu & Kaca"
| "Lantai & Halaman"
| "Drainase"
| "Kelistrikan"
| "Proses Bangun"
| "Akses Jalan"
| "Listrik"
| "Air Bersih"
| "Drainase Lingkungan"
| "Keamanan & Ketertiban"
| "Fasum Lainnya"
| "Konfirmasi Pembayaran"
| "Perhitungan Pembayaran"
| "Pembayaran Lainnya"
| "Legalitas"
| "Akad"
| "Legal lainnya"

export interface FeedbackSubcategoryResponse {
  id: number;
  id_category: number;
  name: SubcategoryTypes;
}

export interface FeedbackDataType {
  id_category: number;
  id_sub_category: number;
  unit: string;
  keluhan: string;
}

export interface SubmitFeedbackParams {
  onSuccess?: (
    data?: unknown,
    variables?: FeedbackDataType,
    context?: unknown
  ) => void | Promise<unknown>;
  onError?: (
    error?: AxiosError,
    variables?: FeedbackDataType,
    context?: unknown
  ) => void | Promise<unknown>;
}