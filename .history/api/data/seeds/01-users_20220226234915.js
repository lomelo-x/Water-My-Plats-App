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
			username: 'user002',
			password: hash,
			phone: 2222222222,
		},
        {
			username: 'user003',
			password: hash,
			phone: 3333333333,
		},
        {
			username: 'user004',
			password: hash,
			phone: 4444444444,
		},
        {
			username: 'user005',
			password: hash,
			phone: 5555555555,
		},
        {
			username: 'user001',
			password: hash,
			phone: 1111111111,
		},
	]);
};
