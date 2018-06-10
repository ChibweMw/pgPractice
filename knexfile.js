// Update with your config settings.
const settings = require("./settings");


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password
    }
  },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
