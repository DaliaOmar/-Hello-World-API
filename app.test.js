const request = require('supertest');
const app = require('./app');

describe('GET /hello', () => {
    it('should return Hello, World! if no name is provided', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ greeting: 'Hello, World!' });
    });

    it('should return Hello, {name} when a name is provided', async () => {
        const res = await request(app).get('/hello?name=Salma');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ greeting: 'Hello, Salma!' }); 
    });
    
});

describe('GET /info', () => {
    it('should return request information', async () => {
        const res = await request(app).get('/info');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('time');
        expect(res.body).toHaveProperty('client_address');
        expect(res.body).toHaveProperty('host_name');
        expect(res.body).toHaveProperty('headers');
    });
});
