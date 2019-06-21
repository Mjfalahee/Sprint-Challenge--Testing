const express = require('express');
const db = require('./data/models/model');

const server = express();
server.use(express.json());

//middleware for validating things

function validateGame(req, res, next) {
    if (req.body.title && req.body.genre) {
        next();
    } else {
        res.status(422).json({
            message: 'Request must include a title and genre.'
        })
    }
}

function uniqueGame(req, res, next) {
    db.findByTitle(req.body.title)
        .then(game => {
            console.log(game);
            if (game.length === 0) {
                next();
            } else {
                res.status(405).json({message: 'Title must be unique'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Error within uniqueGame Middleware'});
        })
}
//queries

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Api is online'
    });
});

server.get('/games', (req, res) => {
    db.findAll()
        .then(games => {
            res.status(200).json(games);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

server.post('/games', validateGame, uniqueGame, (req, res) => {
    db.insert(req.body)
        .then(game => {
            res.status(201).json(game);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})


module.exports = server;