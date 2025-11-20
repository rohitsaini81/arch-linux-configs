/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    // NEVER expose secret keys to the browser — see note below.
    // Use NEXT_PUBLIC_ prefix only for non-secret values you want on client.
    // If SUPABASE_KEY is secret, do NOT put it here.
  },
};

export default nextConfig;
