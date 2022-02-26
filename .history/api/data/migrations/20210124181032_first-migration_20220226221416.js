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
		});
};

exports.down = async (knex) => {
	await knex.schema.dropTableIfExists('users');
};
