
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 'L0GJK76AE90BG09',
          make: 'Genesis',
          model: 'Apollo',
          mileage: 50000,
          transType: 'manual'
        },
        {
          VIN: 'JKJJJL21E98G90',
          make: 'Ford',
          model: 'Escape',
          mileage: 20000,
          transType: 2010,
          titleStatus: 'salvage'
        },
        {
          VIN: '546GAHEE64EHEHHHE',
          make: 'Ferrari',
          model: '300',
          mileage: 5000,
          transType: 'manual',
          titleStatus: 'clean'
        },
        {
          VIN: 'L0GJK76AE90BG079',
          make: 'Genesis',
          model: 'Apollo',
          mileage: 300,
          transType: 'manual'
        },
      ]);
    });
};
