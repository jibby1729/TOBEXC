import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="glass-strong shadow-bubble sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-text-primary hover:text-text-secondary transition-colors">
            TOBEXC
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-text-primary hover:text-text-secondary transition-colors font-medium">
              Home
            </Link>
            <button className="bg-secondary text-white px-6 py-2 rounded-2xl hover:bg-accent transition-all duration-300 bubble-hover shadow-bubble">
              Post Listing
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}