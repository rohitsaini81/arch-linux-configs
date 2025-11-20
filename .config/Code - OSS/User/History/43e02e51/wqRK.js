// db.js
import pkg from 'pg';
const { Pool } = pkg;

// Example connection string:
// postgres://user:password@localhost:5432/mydatabase
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/mydb';

const pool = new Pool({
  connectionString,
});

export default pool;
