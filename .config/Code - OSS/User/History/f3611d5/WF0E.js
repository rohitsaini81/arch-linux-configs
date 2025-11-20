// app/api/blog/[slug]/route.js
import { blogPosts } from '@/lib/blogData';

export async function GET(request, { params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    console.log("hello world")
    return new Response(JSON.stringify({ message: 'Not Found' }), {
      status: 404,
    });
  }

  return Response.json(post);
}
