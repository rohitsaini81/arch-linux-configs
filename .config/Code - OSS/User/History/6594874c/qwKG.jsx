import { blogPosts } from '@/lib/blogData';
import { fetchBlogPost } from '@/lib/pg';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }) {


    const { slug } = await params;
  console.log('Route params:', slug);

  // const post = blogPosts.find((p) => p.slug === params.slug);
  const post = await fetchBlogPost(slug)
  console.log(post)
  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      
      {post.image ? (
        <div className="mb-4 flex justify-center">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 rounded-xl object-cover"
          />
          </div>
        
      ) : (
        <div>
        </div>
      )}

      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
        {post.short_description}</p>
        <img src={post.thumbnail_url} alt="PHOTO" srcset="" />
    </div>
  );
}
