import { Metadata } from 'next';
import Link from 'next/link';
import { getPaginatedPosts } from '@/data/data';
import BlogCard from '@/components/BlogCard';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';

export const metadata: Metadata = {
  title: 'Tech Blog - Home',
  description: 'Latest articles on web development',
};

export default function HomePage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Tech Blog
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover the latest articles on web development, tutorials, and best practices for modern developers.
            </p>

            <div className="mt-8 max-w-md mx-auto">
              <SearchBar />
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Browse All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
