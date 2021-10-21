// import superagent from 'supertest';

// const app = require('../../../src/server');
// const request = () => superagent(app());

// const path = 'test/ping';
// const method = 'get';

// describe(`${method} ${path}`, function() {
//     it('returns a 200 and message - pong', () => {
//         return request()
//         .get(path)
//         .expect(200)
//         .then(res => {
//             expect(res.body).toBe({ message: 'pong'})
//         })
//     })
// })

// import supertest from 'supertest';

// const app = require('../../../src/server');

// const path = 'test/ping';
// const method = 'get';

// describe(`${method} ${path}`, function() {
//     test('returns a 200 and message - pong', async () => {
//         const response = await supertest.agent(app).get(path)
//         expect(response.statusCode).toBe(200)
//         expect(response.text).toBe('pong')
//     })
// })