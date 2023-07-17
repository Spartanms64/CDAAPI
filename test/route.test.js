const request = require('supertest')

let server

describe('router TEST', ()=> {

    beforeEach(()=>{
        server = require('../server')
    })
    afterEach(()=> {
        server.close()
    })

    describe('GET ON /', ()=> {
        it('Should return 200 status', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

        it('Should return 501 status', async()=>{
            const response = await request(server).get('/fngjqkdfvgk')
            expect(response.status).toBe(501)
        })

    describe('GET ON MARCEL', ()=> {
        it('Should return 200 status', async() => {
            const response = await request(server).get('/marcel/12')
            expect(response.status).toBe(200)
        })
        it('Should return 204 status', async()=> {
            const response = await request(server).delete('/marcel/5')
            expect(response.status).toBe(204)
        })

    })

    })
})






