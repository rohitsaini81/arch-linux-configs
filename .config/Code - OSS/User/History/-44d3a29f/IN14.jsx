// import { fetchBlogs } from '@/lib/pg.js';
import Link from 'next/link';
import {fetchBlogs} from "@/lib/fetchPosts.js"
export const dynamic = 'force-dynamic'; // SSR

export default async function BlogPage() {
 

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Latest blogs</h1>
      <div className="space-y-6">
        
      </div>
    </div>
  );
}
