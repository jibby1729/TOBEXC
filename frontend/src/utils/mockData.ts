import type { Listing } from '../types/listing';

export const mockListing: Listing = {
  id: 'mock-mat327-1',
  userName: 'Jibran Iqbal Shah',
  userContact: 'jibraniqbalshah@example.com',
  courseCode: 'MAT327',
  bookTitle: 'MAT327',
  description: 'Example listing',
  quality: 'Like New',
  price: 89.99,
  mediaUrls: ['/placeholder-book.png'],
  status: 'active',
  createdAt: new Date('2024-01-15T10:30:00Z'),
};