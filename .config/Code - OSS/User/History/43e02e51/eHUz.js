// db.js
import pkg from 'pg';
const { Pool } = pkg;

// postgres://user:password@localhost:5432/mydatabase
// process.env.DATABASE_URL ||
const connectionString =  'postgres://rohitsaini:mypassword@localhost:5432/mydatabase';

const pool = new Pool({
  connectionString,
});

// export default pool;




export async function fetchBlogs() {
  try {
    const result = await pool.query('SELECT * FROM blogs');
    return result.rows; // returns an array of rows
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
}



export async function fetchBlogPost(slug) {
  try {
    console.log(slug.includes("/"))
    const result = await pool.query('SELECT * FROM blogs');
    return result.rows; // returns an array of rows
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
}
