const supertest = require('supertest');
const server = require('./server');
require('jest-extended');

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