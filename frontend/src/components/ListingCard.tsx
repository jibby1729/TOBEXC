import { Link } from 'react-router-dom';
import type { Listing } from '../types/listing';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const thumbnailUrl = listing.mediaUrls[0] || '/placeholder-book.png';

  return (
    <Link
      to={`/listing/${listing.id}`}
      className="block glass-strong rounded-3xl shadow-bubble hover:shadow-bubble-hover transition-all duration-300 overflow-hidden bubble-hover"
    >
      <div className="aspect-square relative">
        <img
          src={thumbnailUrl}
          alt={listing.bookTitle}
          className="w-full h-full object-cover rounded-t-3xl"
          onError={(e) => {
            e.currentTarget.src = '/placeholder-book.png';
          }}
        />
        {listing.status === 'sold' && (
          <div className="absolute inset-0 bg-uoft-blue-800 rounded-t-3xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">SOLD</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="text-sm text-primary font-bold mb-1 bg-secondary rounded-full px-3 py-1 inline-block text-white">
          {listing.courseCode}
        </div>
        <h3 className="font-medium text-text-primary line-clamp-2 mb-2">
          {listing.bookTitle}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-400">
            ${listing.price.toFixed(2)}
          </span>
          <span className="text-sm text-text-primary bg-surface rounded-full px-2 py-1">
            {listing.quality}
          </span>
        </div>
      </div>
    </Link>
  );
}