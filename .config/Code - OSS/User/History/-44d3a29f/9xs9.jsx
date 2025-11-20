'useClient'
// import { fetchBlogs } from '@/lib/pg.js';
import Link from 'next/link';
import {fetchBlogs} from "@/lib/fetchPosts.js"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Applications from './components/Applications';
import { useState } from 'react';
export const dynamic = 'force-dynamic'; // SSR




export default async function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Windows');
 

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
              <Navbar/>
      <h1 className="text-4xl font-bold mb-8">Latest blogs</h1>
      <div className="space-y-6">
      <Hero selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Applications />
      </div>
    </div>
  );
}





