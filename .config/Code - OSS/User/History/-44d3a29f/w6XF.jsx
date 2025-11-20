"use client"
// import { fetchBlogs } from '@/lib/pg.js';
import Link from 'next/link';
import { fetchBlogs } from "@/lib/fetchPosts.js"

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Applications from '@/components/Applications';
export const dynamic = 'force-dynamic'; // SSR




// export default async function BlogPage() {
//   const [selectedCategory, setSelectedCategory] = useState('Windows');


//   return (
//     <div className="max-w-2xl mx-auto px-4 py-10">
//               <Navbar/>
//       <h1 className="text-4xl font-bold mb-8">Latest blogs</h1>
//       <div className="space-y-6">
//       <Hero selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
//       <Applications />
//       </div>
//     </div>
//   );
// }



export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Windows');

  const windowsAppsData = [
    {
      title: 'Microsoft Office 2021-2024 Professional Plus',
      description: 'The latest version of the popular productivity suite',
      category: 'Office & PDF',
      icon: '/office-logo.png',
      os: 'Windows',
      downloads: 747299,
      reputation: 4,
      size: '5.59GB',
      featured: false,
    },
    {
      title: 'Microsoft Activation Scripts 3.9',
      description: 'Virus Free Windows and Office Activator',
      category: 'Tools & Utilities',
      icon: '/cmd-logo.png',
      os: 'Windows',
      downloads: 324395,
      reputation: 4,
      size: '1.0MB',
      featured: true,
    },
    {
      title: 'ON1 Photo RAW 2026.1 v20.1.0.17725',
      description: 'Photo Editor and Lightroom Alternative',
      category: 'Graphics & Design',
      icon: '/on1-logo.png',
      os: 'Windows',
      downloads: 68915,
      reputation: 4,
      size: '459MB',
      featured: false,
    },
  ];

  const pcGames = [
    {
      title: 'Grand Theft Auto GTA 5',
      category: 'PC Games',
      size: '63.3GB',
      img: '/gta5.png',
    },
    {
      title: 'Car For Sale Simulator 2023',
      category: 'PC Games',
      size: '2.6GB',
      img: '/car-sale.png',
    },
    {
      title: 'Supermarket Simulator',
      category: 'PC Games',
      size: '963MB',
      img: '/supermarket.png',
    },
    {
      title: 'Lossless Scaling',
      category: 'PC Games',
      size: '69MB',
      img: '/lossless-scaling.png',
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <Hero selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Applications windowsApps={windowsAppsData} pcGames={pcGames} />
    </div>
  );
}




