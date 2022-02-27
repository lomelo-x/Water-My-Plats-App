exports.seed = async function (knex) {
    return knex('plants').insert([
        {
            plant_name: '',
            species: '',
            h20Frequency: 1,
            image_url:
        }
    ])
}