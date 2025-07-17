import { useState } from 'react';
import type { Listing } from '../types/listing';
import MediaViewer from './MediaViewer';
import BotProtection from './BotProtection';

interface ListingDetailProps {
  listing: Listing;
}

export default function ListingDetail({ listing }: ListingDetailProps) {
  const [showContact, setShowContact] = useState(false);
  const [contactInfo, setContactInfo] = useState<string | null>(null);

  const handleCaptchaSuccess = (userContact: string) => {
    setContactInfo(userContact);
    setShowContact(true);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="glass-strong rounded-3xl shadow-bubble overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div>
          <MediaViewer mediaUrls={listing.mediaUrls} title={listing.bookTitle} />
        </div>
        
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 text-text-primary">{listing.bookTitle}</h1>
            <p className="text-xl text-text-muted font-semibold">{listing.courseCode}</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Price:</span>
              <span className="text-2xl font-bold text-green-400">${listing.price.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Condition:</span>
              <span className="font-medium text-text-primary">{listing.quality}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Status:</span>
              <span className={`font-medium capitalize ${
                listing.status === 'active' ? 'text-green-400' : 
                listing.status === 'sold' ? 'text-red-400' : 'text-text-muted'
              }`}>
                {listing.status}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Listed on:</span>
              <span className="text-text-primary">{formatDate(listing.createdAt)}</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-text-primary">Description</h2>
            <p className="text-text-secondary whitespace-pre-wrap">{listing.description}</p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4 text-text-primary">Seller Information</h2>
            <p className="text-text-secondary mb-4">Name: {listing.userName}</p>
            
            {!showContact ? (
              <div>
                <p className="text-text-secondary mb-4">
                  Complete the verification below to view contact information
                </p>
                <BotProtection
                  onSuccess={handleCaptchaSuccess}
                />
              </div>
            ) : (
              <div className="glass p-4 rounded-lg border border-green-400">
                <p className="font-medium text-green-400">Contact Information:</p>
                <p className="text-green-300">{contactInfo}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}