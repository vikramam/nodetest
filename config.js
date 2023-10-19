const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    server: env.DB_HOST || 'SQL5108.site4now.net',
    //port: env.DB_PORT || '1433',
    user: env.DB_USER || 'db_aa0535_testdb_admin',
    password: env.DB_PASSWORD || 'Mulgund@85',
    database: env.DB_NAME || 'db_aa0535_testdb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
