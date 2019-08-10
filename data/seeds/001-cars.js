
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {name: 'Apollo', year: 1996, mpg: 10},
        {name: 'Rainbow', year: 2010},
        {name: 'Halo', year: 2018, mpg: 35}
      ]);
    });
};
