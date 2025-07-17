import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-text-muted">404</h1>
        <p className="text-2xl font-semibold text-text-primary mt-4">Page Not Found</p>
        <p className="text-text-secondary mt-2 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}