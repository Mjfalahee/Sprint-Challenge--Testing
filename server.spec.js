const supertest = require('supertest');
const server = require('./server');

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
        it('returns with status code 200, OK', async () => {
            await supertest(server)
                .get('/games')
                .expect(200);
        });
        it('returns a JSON', async () => {
            await supertest(server)
                .get('/games')
                .expect('Content-Type', /json/i);
        })
        it('returns an array', async () => {
            const expectedBody = [];
            await supertest(server)
                .get('/games')
                .expect(res.body).toEqual(expectedBody);
        })
    })

    describe('post /games', () => {
        it('returns a json object', async () => {
            await supertest(server)
                .post('/games')
                .send({
                    title: 'Pacman',
                    genre: 'Arcade',
                    releaseYear: '1980'
                })
                .expect('Content-Type', /json/i)
        })

        it('returns with status code 201, created on success', async () => {
            await supertest(server)
                .post('/games')
                .send({
                    title: 'Pacman',
                    genre: 'Arcade',
                    releaseYear: '1980'
                })
                .expect(201)
        })
        it('returns status code 422 with incomplete req.body data', async () => {
            await supertest(server)
                .post('/games')
                .send({
                    title: 'Pacman',
                    releaseYear: '1980'
                })
                .expect(422)
        })
    })
})