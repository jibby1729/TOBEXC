import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/api';
import SearchBar from '../components/SearchBar';
import ListingCard from '../components/ListingCard';

export default function SearchResultsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const { data: listings = [], isLoading, error } = useQuery({
    queryKey: ['search', query],
    queryFn: () => api.listings.search({ query }),
    enabled: !!query,
  });

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-text-primary">Search Results</h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar value={query} onChange={handleSearch} />
        </div>

        {isLoading && (
          <div className="text-center py-8">
            <p className="text-text-secondary">Searching...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-400">Error performing search. Please try again.</p>
          </div>
        )}

        {!isLoading && !error && (
          <>
            <p className="text-text-secondary mb-4">
              Found {listings.length} result{listings.length !== 1 ? 's' : ''} for "{query}"
            </p>
            
            {listings.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-text-secondary">No listings found. Try a different search term.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}