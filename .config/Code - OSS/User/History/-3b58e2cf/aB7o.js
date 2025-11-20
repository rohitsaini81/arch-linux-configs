// src/app/api/hello/route.js

// Create a model (maps to a MongoDB collection)

import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";
dotenv.config();

// Load from environment variables (recommended)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

let isConnected = false;




export async function fetchBlogs() {
  try {
    
    const { data, error } = await supabase.from("blogs").select("*");
    console.log("Fetched users:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


// export async function fetchBlogPost(query) {
//   try {

//      const { data: blogs, error } = await supabase
//   .from("blogs")
//   .select("*")
//   .or(`title.ilike.%${query}%,description.ilike.%${query}%`);

//     return blogs;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };





/**
 * Fetch a single video by title or description (case-insensitive)
 * @param {string} query - search string
 * @returns {Promise<Object|null>} video document
 */


export async function fetchVideoByQuery(query) {

  // Search title or description (case-insensitive)
  const video = await supabase.from("blogs").select("*").eq("title", query);
  return video; // returns a single document or null
}


export async function fetchBlogPost(slug) {
  try {
    const decodedSlug = decodeURIComponent(slug)

    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('title', decodedSlug)
      .single() // returns the first matching row as an object

    if (error) throw error

    return data
  } catch (err) {
    console.error('Error fetching blog:', err)
    throw err
  }
}



export async function fetchBlogPostContent(blog_id) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('blog_id', blog_id)
      .single() // because we expect only one row

    if (error) throw error

    return data
  } catch (err) {
    console.error('Error fetching blogs:', err)
    throw err
  }
}

// export async function GET() {
//   // const ok = await fetchd();
//   const ok = await fetchm();
//   return Response.json(ok)
// }

// export async function POST(req) {
//   const data = await req.json()
//   return Response.json({ received: data })
// }