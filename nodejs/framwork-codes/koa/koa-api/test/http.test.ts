import run from '../app'
import { Server } from 'http'
import request from 'supertest'
describe('http', () => {
  let server: Server
  beforeAll(() => {
    server = run(3002)
  })
  it('get/post', () => {
    return request(server)
      .get('/admin')
      .expect(200)
      .then(res=>{
        expect(res.body.length).toEqual(5)
        expect(res.body).toStrictEqual([1,2,3,4,5])
      })
  })
  afterAll(async () => {
    server.close()
  })
})