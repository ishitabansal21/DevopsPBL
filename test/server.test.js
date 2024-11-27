const request = require('supertest');
const app = require('../server');
const pool = require('../db');


describe('API Endpoints', () => {
    it('POST / - should add a college', async () => {
        const res = await request(app)
            .post('/')
            .send({ name: 'JIIT', location: 'Sector 128, Jaypee internal road near Jaypee Greens, Noida' });

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Successfully added College and its address');
    });

    it('GET / - should retrieve colleges', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThanOrEqual(1);
    });
});
