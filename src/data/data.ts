export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
  image?: string;
  readTime?: number;
}

const blogs: BlogPost[] = [
  { 
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2025-06-01",
    author: "Jane Doe",
    excerpt: "A beginner-friendly guide to building your first app with Next.js.",
    content: `
      <p>Next.js is a powerful React framework that enables features like server-side rendering and static site generation.</p>
      <p>In this post, we’ll cover how to set up your first Next.js project, create pages, and run the development server.</p>
    `,
    tags: ["nextjs", "react", "javascript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    readTime: 5
  },
  { 
    id: "2",
    title: "Static Site Generation vs Server-Side Rendering",
    slug: "ssg-vs-ssr",
    date: "2025-05-20",
    author: "John Smith",
    excerpt: "Understanding the key differences between SSG and SSR in Next.js.",
    content: `
      <p>Static Site Generation (SSG) and Server-Side Rendering (SSR) are two rendering methods offered by Next.js.</p>
      <p>Each has its pros and cons, and choosing the right one depends on your use case.</p>
    `,
    tags: ["nextjs", "ssg", "ssr", "performance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    readTime: 7
  },
  {
    id: "3",
    title: "Styling in Next.js: CSS Modules & Tailwind",
    slug: "styling-in-nextjs",
    date: "2025-05-15",
    author: "Emily Chen",
    excerpt: "Explore the most popular ways to style your Next.js app including CSS Modules and Tailwind CSS.",
    content: `
      <p>Styling in Next.js can be done through global CSS, CSS Modules, or utility-first frameworks like Tailwind CSS.</p>
      <p>We’ll look at examples and best practices for each method.</p>
    `,
    tags: ["nextjs", "css", "tailwind", "styling"],
    image: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 6
  },
  {
    id: "4",
    title: "API Routes in Next.js Explained",
    slug: "api-routes-nextjs",
    date: "2025-05-10",
    author: "Jane Doe",
    excerpt: "Learn how to create backend functionality using API routes in Next.js.",
    content: `
      <p>API routes allow you to build your API directly in a Next.js app, without a separate backend.</p>
      <p>This article covers the basics of creating and using API endpoints in your project.</p>
    `,
    tags: ["nextjs", "api", "backend"],
    image: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 5
  },
  {
    id: "5",
    title: "Deploying Your Next.js App with Vercel",
    slug: "deploy-nextjs-vercel",
    date: "2025-05-01",
    author: "John Smith",
    excerpt: "Step-by-step guide to deploying your Next.js project to Vercel.",
    content: `
      <p>Vercel is the creators’ platform of Next.js and offers seamless deployment options.</p>
      <p>We'll walk through connecting your repo, setting up builds, and going live.</p>
    `,
    tags: ["nextjs", "vercel", "deployment"],
    image: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 4
  },
  {
    id: "6",
    title: "Optimizing Performance in Next.js",
    slug: "nextjs-performance-optimization",
    date: "2025-04-25",
    author: "Emily Chen",
    excerpt: "Tips and best practices for improving performance in your Next.js applications.",
    content: `
      <p>From image optimization to dynamic imports, Next.js provides tools for boosting app performance.</p>
      <p>Learn how to analyze and improve your site’s speed and user experience.</p>
    `,
    tags: ["nextjs", "performance", "seo"],
    image: "https://plus.unsplash.com/premium_photo-1682145730713-34bba6d3d14a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 8
  },
  {
    id: "7",
    title: "Internationalization (i18n) in Next.js",
    slug: "nextjs-internationalization",
    date: "2025-04-15",
    author: "Jane Doe",
    excerpt: "Add multilingual support to your Next.js apps with built-in i18n routing.",
    content: `
      <p>Next.js supports internationalized routing out of the box.</p>
      <p>This post explains how to set up locales, language detection, and fallback strategies.</p>
    `,
    tags: ["nextjs", "i18n", "localization"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
    readTime: 6
  },
  {
    id: "8",
    title: "Working with Images in Next.js",
    slug: "nextjs-image-component",
    date: "2025-04-01",
    author: "John Smith",
    excerpt: "Learn how to use the powerful Next.js Image component for better image handling.",
    content: `
      <p>The Next.js Image component offers automatic optimization and responsive loading.</p>
      <p>This guide shows how to implement it correctly and customize it for your needs.</p>
    `,
    tags: ["nextjs", "images", "optimization"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    readTime: 5
  }
];

export default blogs;

export const POSTS_PER_PAGE = 6;

export function getPaginatedPosts(page: number = 1) {
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = blogs.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalPosts: blogs.length,
    totalPages: Math.ceil(blogs.length / POSTS_PER_PAGE),
    currentPage: page,
    hasNextPage: endIndex < blogs.length,
    hasPrevPage: page > 1
  };
}

export function getPostBySlug(slug: string) {
  return blogs.find(post => post.slug === slug);
}

export function searchPosts(query: string) {
  const lowercaseQuery = query.toLowerCase();
  return blogs.filter(post =>  
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.author.toLowerCase().includes(lowercaseQuery)
  );
}
