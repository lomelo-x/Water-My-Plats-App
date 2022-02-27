exports.seed = async function (knex) {
    return knex('plants').insert([
        {
            plant_name: 'plant001',
            species: 'species001',
            h20Frequency: 1,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant002',
            species: 'species002',
            h20Frequency: 2,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant003',
            species: 'species003',
            h20Frequency: 3,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant004',
            species: 'species004',
            h20Frequency: 4,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant005',
            species: 'species005',
            h20Frequency: 5,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant006',
            species: 'species006',
            h20Frequency: 6,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant007',
            species: 'species007',
            h20Frequency: 7,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant008',
            species: 'species008',
            h20Frequency: 8,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant009',
            species: 'species009',
            h20Frequency: 9,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
        {
            plant_name: 'plant010',
            species: 'species010',
            h20Frequency: 10,
            image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhDUKdqFwsRvzB3ZtoxK3wR9ThYr_yJhRRQ&usqp=CAU',
        },
    ])
}