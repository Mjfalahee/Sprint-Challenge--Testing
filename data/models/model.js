const db = require('../dbConfig');

module.exports = {
    findAll,
    insert
}


function findAll() {
    return db('data');
}

function insert(game) {
    return db('data')
        .insert(game, 'id')
        .then(ids => {
            return db('data')
                .where({id: ids[0]})
                .first();
        });
}