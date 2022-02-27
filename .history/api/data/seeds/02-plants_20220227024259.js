exports.seed = async function (knex) {
    return knex('plants').insert([
        {
            plant_name: '',
            species: '',
            h20Frequency: 1,
            image_url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.theplantlist.org%2F&psig=AOvVaw1GN4RV3cTj8A635Tf77Juu&ust=1646012468651000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjbqL3gnvYCFQAAAAAdAAAAABAD',
        }
    ])
}