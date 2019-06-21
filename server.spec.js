const supertest = require('supertest');
const server = require('./server');
require('jest-extended');

const seeddata = [
    {id: 1, title: 'Pac Man', genre: 'Arcade', releaseYear: '1980'},
    {id: 2, title: 'Doom', genre: 'FPS', releaseYear: '1993'},
    {id: 3, title: 'Diablo', genre: 'ARPG', releaseYear: '1996'}
  ]
//minimum 3 tests per endpoint

//the POST /games should take in an object 
// obj = {
//     title: 'Pacman', required
//     genre: 'Arcade', required
//     releaseYear: 1980 not required
// }

//In the route handler validate that the required fields are included inside the body. If the information is incomplete, return a 422 status code.
//Test -- correct status, receiving correct/incorrect game data

//GET /games should return a list of games, and status code 200
//write a test to make sure the endpoint returns an array, even if no games are stored. If there are no games to return, the endpoint should return an empty array. 

describe('server', () => {
    describe('get /games', () => {
        it('returns with status code 200, OK', () => {
            return supertest(server)
                .get('/games')
                .expect(200);
        });
        it('returns with Content-type json object', () => {
            return supertest(server)
                .get('/games')
                .expect('Content-Type', /json/i);
        })
        it('returns an array, even empty', () => {
            return supertest(server)
                .get('/games')
                .then(res => {
                    expect(res.body)
                    .toBeArray();
                })
        })
    })

    describe('post /games', () => {
        it('returns a json object', async () => {
            await supertest(server)
                .post('/games')
                .send({
                    title: 'Spaghetti',
                    genre: 'Arcade',
                    releaseYear: '1980'
                })
                .expect('Content-Type', /json/i)
        })

        it('returns with status code 201, created on success', async () => {
            await supertest(server)
                .post('/games')
                .send({
                    title: 'Nonsense',
                    genre: 'Arcade',
                    releaseYear: '1980'
                })
                .expect(201)
        })
        it('returns status code 422 with incomplete req.body data', async () => {
            await supertest(server)
                .post('/games')
                .send({
                    title: 'Whatever',
                    releaseYear: '1980'
                })
                .expect(422)
        })
    })
})