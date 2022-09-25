module.exports = {
    development: {
      client: 'pg',
      useNullAsDefault: true,
      connection: {
        host: 'database',
        user: 'postgres',
        password: '1234',
        database: 'postgres'
      },
    },
  
    production: {
      client: 'pg',
      useNullAsDefault: true,
      connection: {
        host: 'database',
        user: 'postgres',
        password: '1234',
        database: 'postgres'
      },
    },
  }