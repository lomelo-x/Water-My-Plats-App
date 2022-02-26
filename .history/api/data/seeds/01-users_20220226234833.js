const encrypt = require('bcryptjs');

exports.seed = async function (knex) {
	const hash = encrypt.hashSync('password');
	return knex('users').insert([
		{
			username: 'user001',
			password: hash,
			phone: 1111111111,
		},
        {
			username: 'user001',
			password: hash,
			phone: 1111111111,
		},
        {
			username: 'user001',
			password: hash,
			phone: 1111111111,
		},
        {
			username: 'user001',
			password: hash,
			phone: 1111111111,
		},
        {
			username: 'user001',
			password: hash,
			phone: 1111111111,
		},
        {
			username: 'user001',
			password: hash,
			phone: 1111111111,
		},
	]);
};
