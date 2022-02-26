exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 128).notNullable()
      users.string('password', 128).notNullable()
      users.string('phone', 10)
      users.timestamps(false, true)
    })
    .createTable('plants', (plants) => {
      plants.increments('plant_id')
      plants.string('plant_name', 128).notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
