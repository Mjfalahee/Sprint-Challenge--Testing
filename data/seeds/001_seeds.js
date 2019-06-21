
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('data').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        {title: 'Pac Man', genre: 'Arcade', releaseYear: '1980'},
        {title: 'Doom', genre: 'FPS', releaseYear: '1993'},
        {title: 'Diablo', genre: 'ARPG', releaseYear: '1996'}
      ]);
    });
};
