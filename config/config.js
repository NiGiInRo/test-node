module.exports = {
    port: process.env.PORT || 8081,
    local: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: 'postgres',
      password: 'postgres',
      dialect: 'postgres'
    },
    development: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: 'postgres',
      password: 'postgres',
      dialect: 'postgres'
    }
  };