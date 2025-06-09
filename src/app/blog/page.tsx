import { Metadata } from 'next';
import { getPaginatedPosts } from '@/data/data';
import BlogCard from '@/components/BlogCard';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'All blog posts',
};

export default function BlogPage() {
  const { posts, totalPages, currentPage, totalPosts } = getPaginatedPosts(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Blog Posts</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our collection of {totalPosts} articles on web development and technology
          </p>

          <div className="max-w-md mx-auto mb-8">
            <SearchBar />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog/page"
        />
      </div>
    </div>
  );
}