// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

let config = {};

// const pool = new Pool({
//     database: process.env.DATABASE_NAME ||'react_gallery', // database name (this will change)
//     host: 'localhost', // where to find the database
//     port: 5432,        // port for finding the database
//     max: 10,           // max number of connections for the pool
//     idleTimeoutMillis: 30000 // 30 seconds before timeout/cancel query
// });

if (process.env.DATABASE_URL) {
    config = {
      // We use the DATABASE_URL from Heroku to connect to our DB
      connectionString: process.env.DATABASE_URL,
      // Heroku also requires this special `ssl` config
      ssl: { rejectUnauthorized: false },
    };
  } else {
    // If we're not on heroku, configure PG to use our local database
    config = {
      host: 'localhost',
      port: 5432,
      database: 'react_gallery', // CHANGE THIS LINE to match your local database name!
      max: 10, 
      idleTimeoutMillis: 30000
    };
  }

const pool = new Pool (config);

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;