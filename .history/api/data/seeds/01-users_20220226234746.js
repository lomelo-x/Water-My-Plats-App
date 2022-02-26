const encrypt = require('bcryptjs')

exports.seed = async function(knex) {
    const hash = encrypt.hashSync('password')
    return knex('users').insert([
        {
            username: 'user001'
        }
    ])
}