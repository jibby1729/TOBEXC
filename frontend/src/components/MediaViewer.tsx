import { useState } from 'react';

interface MediaViewerProps {
  mediaUrls: string[];
  title: string;
}

export default function MediaViewer({ mediaUrls, title }: MediaViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (mediaUrls.length === 0) {
    return (
      <div className="aspect-square glass flex items-center justify-center rounded-lg">
        <p className="text-text-muted">No images available</p>
      </div>
    );
  }

  const currentMedia = mediaUrls[currentIndex];
  const isVideo = currentMedia.includes('.mp4') || currentMedia.includes('.mov') || currentMedia.includes('.avi');
  const optimizedUrl = currentMedia;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaUrls.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mediaUrls.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="aspect-square glass rounded-lg overflow-hidden">
        {isVideo ? (
          <video
            src={optimizedUrl}
            controls
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={optimizedUrl}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = '/placeholder-book.png';
            }}
          />
        )}
      </div>

      {mediaUrls.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {mediaUrls.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}