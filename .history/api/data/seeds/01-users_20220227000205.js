const encrypt = require('bcryptjs');

exports.seed = async function (knex) {
	const hash = encrypt.hashSync('password');
	return knex('users').insert([
		{
			username: 'user001',
			password: hash,
			phoneNumber: 1111111111,
		},
		{
			username: 'user002',
			password: hash,
			phoneNumber: 2222222222,
		},
		{
			username: 'user003',
			password: hash,
			phoneNumber: 3333333333,
		},
		{
			username: 'user004',
			password: hash,
			phoneNumber: 4444444444,
		},
		{
			username: 'user005',
			password: hash,
			phoneNumber: 5555555555,
		},
		{
			username: 'user006',
			password: hash,
			phoneNumber: 6666666666,
		},
	]);
};
