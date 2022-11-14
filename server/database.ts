const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "AppleSauce",
    host: "localhost",
    port: 5432,
    database: "packd"
});

export default pool;