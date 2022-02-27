exports.seed = async function (knex) {
    return knex('plants').insert([
        {
            plant_name: 'plant001',
            species: 'species001',
            h20Frequency: 1,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant001',
            species: 'species001',
            h20Frequency: 1,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant001',
            species: 'species001',
            h20Frequency: 1,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant001',
            species: 'species001',
            h20Frequency: 1,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant001',
            species: 'species001',
            h20Frequency: 1,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant001',
            species: 'species001',
            h20Frequency: 1,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
    ])
}