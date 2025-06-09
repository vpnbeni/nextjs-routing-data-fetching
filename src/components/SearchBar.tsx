'use client';

import { useState, useEffect } from 'react';
import { BlogPost, searchPosts } from '@/data/data';
import { IoSearch } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';

interface SearchBarProps {
  onSearchResults?: (results: BlogPost[]) => void;
}

export default function SearchBar({ onSearchResults}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BlogPost[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        setIsSearching(true);
        const searchResults = searchPosts(query);
        setResults(searchResults);
        setIsSearching(false);
        setShowDropdown(true);
        onSearchResults?.(searchResults);
      } else {
        setResults([]);
        setShowDropdown(false);
        onSearchResults?.([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, onSearchResults]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
    setShowDropdown(false);
    onSearchResults?.([]);
  };

  const handleResultClick = () => {
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IoSearch />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search blog posts..."
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        
        {query && (
          <button
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <RxCross2 />
          </button>
        )}
      </div>

      {showDropdown  && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              <span className="mt-2 block">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="p-2">
              <div className="text-sm text-gray-500 px-2 py-1 border-b">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </div>
              {results.map((post) => (
                <div
                  key={post.id}
                  onClick={handleResultClick}
                  className="p-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                >
                  <Link href={`blog/${post.slug}`} className="flex items-start space-x-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 truncate">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-400">{post.author}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-4 text-center text-gray-500">
              No results found for "{query}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
