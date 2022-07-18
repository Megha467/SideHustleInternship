const app = require("../index");
const userController = require('../controllers/userController');
const request = require('supertest')


// describe('GET APIs',()=>{
//     test('It should return product list',async ()=>{
//        const response = await request(app).get('/getallusers')
//        expect(response.body.users.length).toBeGreaterThan(2)
//        expect(response.statusCode).toBe(200)
//     })
// })

describe('POST API', ()=>{
    test('It should post a user', async()=> {
        let user={
            username: 'megha',
            password: '123456',
            email: 'k@gmail.com'
        }

        const response = await request(app).post('/signup').send(user)
        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.user.username).toBe('megha')
    })
})


describe('Delete API', ()=>{
    test('It should delete a user', async()=> {
        const response = await request(app).post('/signup').send(user)
        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        
    })
})


// describe('sum', ()=> {
//     test('test case', ()=>{
//         expect(userController.sum()).toBe(3);
//     })
// });

// describe('object', ()=> {
//     test('test case', ()=>{
//         expect(userController.sum()).toEqual({name: 'megha'});
//     })
// });