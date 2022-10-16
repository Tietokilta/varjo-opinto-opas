module.exports = {
    development: {
      client: 'pg',
      useNullAsDefault: true,
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      },
    },
  
    production: {
      client: 'pg',
      useNullAsDefault: true,
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      },
    },
  }