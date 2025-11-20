// db.js
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv'
dotenv.config()
// postgres://user:password@localhost:5432/mydatabase
// process.env.DATABASE_URL ||
const connectionString = process.env.DATABASE_URL 
// ||'postgres://rohitsaini:mypassword@localhost:5432/mydatabase';

const pool = new Pool({
  connectionString,
});

// export default pool;




export async function fetchBlogs() {
  try {
    const result = await pool.query('SELECT * FROM blogs');
    return result.rows; 
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
}



export async function fetchBlogPost(slug) {
  try {
    const decodedSlug = decodeURIComponent(slug); // 🔥 important
    const result = await pool.query(
      'SELECT * FROM blogs WHERE title = $1',
      [decodedSlug]
    );
    return result.rows[0]; 
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
}

export async function fetchBlogPostContent(blog_id) {
  try {
    // console.log(blog_id)
    const result = await pool.query(
      'SELECT * FROM blog_posts WHERE blog_id = $1',
      [blog_id]
    );
    return result.rows[0]; 
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
}
