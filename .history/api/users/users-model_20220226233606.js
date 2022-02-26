const db = require('../data/db-config');
const encrypt = require('bcryptjs');

function getUsers() {
	return db('users');
}

function getUserByID(user_id) {
	return db('users').where('user_id', user_id).first();
}

function findUsername(username) {
	return db('users').where('username', username).first();
}

// function getPlantsByUserID(user_id) {
//     return db('plants')
// }

async function createUser(user) {
    const [newUser] = await db('users')
        .insert(user, [])
}

module.exports = {
	getUsers,
	getUserByID,
	findUsername,
};
