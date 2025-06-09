import { NextRequest, NextResponse } from 'next/server';
import { searchPosts } from '@/data/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const results = searchPosts(query);
    
    return NextResponse.json({
      query,
      results,
      total: results.length
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
