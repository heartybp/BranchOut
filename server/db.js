// code for connecting to database

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "", // 
    // put your postgres password here, but don't commit this file onto github so that your password is protected
        // to do so, make sure db.js is in .gitignore file
    host: "localhost",
    port: 5432,
    database: "networkingapp"
});

module.exports = pool;