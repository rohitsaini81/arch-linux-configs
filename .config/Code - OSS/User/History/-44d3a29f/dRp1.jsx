// import { fetchBlogs } from '@/lib/pg';
import { fetchBlogs } from '@/lib/pg.js';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // SSR

export default async function BlogPage() {
  const blogs = await fetchBlogs();
  console.log("blogs frontend ;",blogs)

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Latest blogs</h1>
      <div className="space-y-6">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.title}`}
            className="flex gap-4 hover:bg-gray-50 p-4 rounded-xl transition"
          >
            {post.thumbnail_url ? (
              <img
                src={post.thumbnail_url}
                alt={post.title}
                className="w-28 h-28 rounded-xl object-cover flex-shrink-0"
              />
            ) : (
              <div></div>
            )}

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
              </div>
              <span className="text-xs text-gray-400 mt-2">{post.author} 2 min read</span>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-500">{post.likes} Likes</span>
                <span className="text-sm text-gray-500 ml-4">{post.dislikes} Dislikes</span>
                <span className="text-sm text-gray-500 ml-4">{post.postedAt}</span>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
