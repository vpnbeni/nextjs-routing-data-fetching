import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({ currentPage, totalPages, basePath = '/blog/page' }: PaginationProps) {
  const generatePageNumbers = () => {
    const pages = [];
    const showPages = 5; 
    
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);
    
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center space-x-2 mt-8" aria-label="Pagination">
      {currentPage > 1 ? (
        <Link
          href={currentPage === 2 ? '/blog' : `${basePath}/${currentPage - 1}`}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          Previous
        </Link>
      ) : (
        <span className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed">
          Previous
        </span>
      )}

      {pageNumbers[0] > 1 && (
        <>
          <Link
            href="/blog"
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            1
          </Link>
          {pageNumbers[0] > 2 && (
            <span className="px-3 py-2 text-sm font-medium text-gray-500">...</span>
          )}
        </>
      )}

      {pageNumbers.map((pageNum) => (
        <Link
          key={pageNum}
          href={pageNum === 1 ? '/blog' : `${basePath}/${pageNum}`}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            pageNum === currentPage
              ? 'bg-blue-600 text-white border border-blue-600'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'
          }`}
        >
          {pageNum}
        </Link>
      ))}


      {currentPage < totalPages ? (
        <Link
          href={`${basePath}/${currentPage + 1}`}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          Next
        </Link> 
      ) : (
        <span className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed">
          Next
        </span>
      )}
    </nav>
  );
}
