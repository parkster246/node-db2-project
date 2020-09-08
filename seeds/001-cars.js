exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('cars').insert([
          {make: 'Toyota', model: 'Camry', VIN: '2FMHK6CC8ABA50522', milage: 87567 , transmissionType: 'allison' , statusOfTitle: 'clean'  },
          {make: 'Ford', model: 'Escape', VIN: '2FMHK6CC8ABART522', milage: 90567 , transmissionType: 'turbo350' , statusOfTitle: 'salvaged'  },
        ]);
      });
  };
  