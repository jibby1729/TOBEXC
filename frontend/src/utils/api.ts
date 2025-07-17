import axios from 'axios';
import type { Listing, CreateListingDto, UpdateListingStatusDto, SearchParams } from '../types/listing';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  listings: {
    getAll: async (): Promise<Listing[]> => {
      const response = await apiClient.get<Listing[]>('/listings/');
      return response.data;
    },

    getById: async (id: string): Promise<Listing> => {
      const response = await apiClient.get<Listing>(`/listings/${id}/`);
      return response.data;
    },

    create: async (data: CreateListingDto): Promise<Listing> => {
      const response = await apiClient.post<Listing>('/listings/', data);
      return response.data;
    },

    updateStatus: async (id: string, data: UpdateListingStatusDto): Promise<Listing> => {
      const response = await apiClient.patch<Listing>(`/listings/${id}/status/`, data);
      return response.data;
    },

    search: async (params: SearchParams): Promise<Listing[]> => {
      const response = await apiClient.get<Listing[]>('/listings/search/', { params });
      return response.data;
    },
  },

  captcha: {
    verifyToken: async (token: string): Promise<{ success: boolean; userContact?: string }> => {
      const response = await apiClient.post('/captcha/verify/', { token });
      return response.data;
    },
  },
};