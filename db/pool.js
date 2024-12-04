import pg from "pg";
const { Pool } = pg;
import "dotenv/config";

export default new Pool({
  connectionString: process.env.DB_URI,
  ssl: { rejectUnauthorized: false },
});
