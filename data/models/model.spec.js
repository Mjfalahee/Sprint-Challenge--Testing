const db = require('../dbConfig');
const model = require('./model');

describe('route model', () => {
    beforeEach(async () => {
        await db('data').truncate();
    });

    it('should set the environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('insert()', () => {
        it('should insert data into the table', async () => {
            await model.insert({
                title: 'Pacman',
                genre: 'Arcade',
                releaseYear: '1980'
            })
            const data = await db('data');
            expect(data).toHaveLength(1);
        })
        it('should add the provided data to the table', async () => {
            let taco = {
                title: 'Taco',
                genre: 'Taco Game',
                releaseYear: '2019'
            }
            const inserted = await model.insert(taco);
            expect(inserted.title).toBe(taco.title);
        })
    })

    describe('findAll()',  () => {
        it('should return an array', async () => {
            let array = [];
            const data = await model.findAll();
            expect(data).toEqual(array);
        })
    })
})