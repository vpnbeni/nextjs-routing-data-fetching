import { notFound } from 'next/navigation';
import { getPaginatedPosts } from '@/data/data';
import BlogCard from '@/components/BlogCard';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';

interface PageProps {
  params: Promise<{
    pageNumber: string;
  }>;
}


export default async function BlogPageNumber({ params }: PageProps) {
  const { pageNumber: pageNumberStr } = await params;
  const pageNumber = parseInt(pageNumberStr);
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }
  
  const { posts, totalPages, currentPage, totalPosts } = getPaginatedPosts(pageNumber);
  
  if (pageNumber > totalPages) {
    notFound();
  } 
  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog Posts - Page {currentPage}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Showing page {currentPage} of {totalPages} ({totalPosts} total articles)
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
