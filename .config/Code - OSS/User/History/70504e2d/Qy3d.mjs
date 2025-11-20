/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    nextConfig,
      env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY
  }

};
