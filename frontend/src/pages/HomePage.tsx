import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ListingCard from '../components/ListingCard';
import type { Listing } from '../types/listing';
import { mockListing } from '../utils/mockData';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);

  useEffect(() => {
    const listings = [mockListing];
    
    if (searchQuery) {
      const filtered = listings.filter(
        (listing) =>
          listing.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
          listing.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredListings(filtered);
    } else {
      setFilteredListings(listings);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-text-primary">TOBEXC - UofT Book Exchange</h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mb-8">
          <div className="glass-uoft rounded-2xl p-6 mb-6 shadow-bubble">
            <p className="text-text-secondary text-sm">
              <strong>Note:</strong> This is an example listing to demonstrate the marketplace functionality.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-text-primary">
            {searchQuery ? 'Search Results' : 'Recent Listings'}
          </h2>
          
          {filteredListings.length === 0 ? (
            <p className="text-text-muted text-center py-8">
              {searchQuery ? 'No listings found matching your search.' : 'No listings available.'}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}