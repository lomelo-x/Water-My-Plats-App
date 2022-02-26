exports.up = async (knex) => {
	await knex.schema
		.createTable('users', (users) => {
			users.increments('user_id');
			users.string('username', 128).notNull().unique();
			users.string('password', 128).notNull();
			users.string('phone', 10);
			users.timestamps(false, true);
		})
		.createTable('plants', (plants) => {
			plants.increments('plant_id');
			plants.string('plant_name', 128).notNull().unique();
      plants.string('species', 128)
      plants.integer('h20_frequency', 7)
      plants.text('image_url', 500)
      plants.binary('uploaded_image', 128)
      plants.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
		});
    .createTable('user_plants', (user_plants) => {
      user_plants.increments('user_plants_id')
      user_plants.integer('')
    })
};

exports.down = async (knex) => {
	await knex.schema.dropTableIfExists('users');
};
