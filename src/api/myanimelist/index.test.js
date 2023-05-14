import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Myanimelist } from '.'

const app = () => express(apiRoot, routes)

let myanimelist

beforeEach(async () => {
    myanimelist = await Myanimelist.create({})
})

test('POST /mal 201', async () => {
    const { status, body } = await request(app())
        .post(`${apiRoot}`)
        .send({ token: 'test', lastUpdate: 'test', updateCount: 'test' })
    expect(status).toBe(201)
    expect(typeof body).toEqual('object')
    expect(body.token).toEqual('test')
    expect(body.lastUpdate).toEqual('test')
    expect(body.updateCount).toEqual('test')
})

test('GET /mal/:id 200', async () => {
    const { status, body } = await request(app()).get(
        `${apiRoot}/${myanimelist.id}`
    )
    expect(status).toBe(200)
    expect(typeof body).toEqual('object')
    expect(body.id).toEqual(myanimelist.id)
})

test('GET /mal/:id 404', async () => {
    const { status } = await request(app()).get(
        apiRoot + '/123456789098765432123456'
    )
    expect(status).toBe(404)
})

test('PUT /mal/:id 200', async () => {
    const { status, body } = await request(app())
        .put(`${apiRoot}/${myanimelist.id}`)
        .send({ token: 'test', lastUpdate: 'test', updateCount: 'test' })
    expect(status).toBe(200)
    expect(typeof body).toEqual('object')
    expect(body.id).toEqual(myanimelist.id)
    expect(body.token).toEqual('test')
    expect(body.lastUpdate).toEqual('test')
    expect(body.updateCount).toEqual('test')
})

test('PUT /mal/:id 404', async () => {
    const { status } = await request(app())
        .put(apiRoot + '/123456789098765432123456')
        .send({ token: 'test', lastUpdate: 'test', updateCount: 'test' })
    expect(status).toBe(404)
})

test('DELETE /mal/:id 204', async () => {
    const { status } = await request(app()).delete(
        `${apiRoot}/${myanimelist.id}`
    )
    expect(status).toBe(204)
})

test('DELETE /mal/:id 404', async () => {
    const { status } = await request(app()).delete(
        apiRoot + '/123456789098765432123456'
    )
    expect(status).toBe(404)
})
