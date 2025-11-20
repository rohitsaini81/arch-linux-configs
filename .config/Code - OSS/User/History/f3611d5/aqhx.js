// app/api/blog/[slug]/route.js
import { blogPosts } from '@/lib/blogData';
import { fetchVideos } from '../fetchVideos';

export async function GET(request, { params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const blogs = await fetchVideos()
  console.log(blogs)

  if (!post) {
    return new Response(JSON.stringify({ message: 'Not Found' }), {
      status: 404,
    });
  }

  return Response.json(post);
}
