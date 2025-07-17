import React from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from '../utils/debounce';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const debouncedFn = debounce((value: string) => onChange(value), 300);
    debouncedFn(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          defaultValue={value}
          onChange={handleInputChange}
          placeholder={placeholder || "Search by course code (e.g., MAT247) or book title..."}
          className="w-full px-6 py-4 pr-16 glass-strong rounded-3xl focus:outline-none focus:ring-2 focus:ring-text-accent focus:border-text-accent placeholder-text-muted text-text-primary shadow-bubble"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-text-muted hover:text-text-accent transition-colors rounded-full hover:bg-surface"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}