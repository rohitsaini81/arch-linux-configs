// app/api/blog/[slug]/route.js
import { blogPosts } from '@/lib/blogData';
import { fetchBlogs } from '../../../lib/pg.js';

export async function GET(request, { params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const blogs = await fetchBlogs()
  console.log("blogs", blogs)

  if (!blogs) {
    return new Response(JSON.stringify({ message: 'Not Found' }), {
      status: 404,
    });
  }

  return Response.json(blogs);
}
