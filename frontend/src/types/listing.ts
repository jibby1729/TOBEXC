export type ListingStatus = 'active' | 'sold' | 'expired';

export type BookQuality = 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';

export interface Listing {
  id: string;
  userName: string;
  userContact: string;
  courseCode: string;
  bookTitle: string;
  description: string;
  quality: BookQuality;
  price: number;
  mediaUrls: string[];
  status: ListingStatus;
  createdAt: Date;
}

export interface CreateListingDto {
  userName: string;
  userContact: string;
  courseCode: string;
  bookTitle: string;
  description: string;
  quality: BookQuality;
  price: number;
  mediaUrls: string[];
}

export interface UpdateListingStatusDto {
  status: ListingStatus;
}

export interface SearchParams {
  query: string;
  page?: number;
  limit?: number;
}