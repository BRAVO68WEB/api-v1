import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Files } from '.'

const app = () => express(apiRoot, routes)

let files

beforeEach(async () => {
    files = await Files.create({})
})

test('POST /files 201', async () => {
    const { status, body } = await request(app())
        .post(`${apiRoot}`)
        .send({ uploader: 'test', oneTime: 'test', password: 'test' })
    expect(status).toBe(201)
    expect(typeof body).toEqual('object')
    expect(body.uploader).toEqual('test')
    expect(body.oneTime).toEqual('test')
    expect(body.password).toEqual('test')
})

test('GET /files 200', async () => {
    const { status, body } = await request(app()).get(`${apiRoot}`)
    expect(status).toBe(200)
    expect(Array.isArray(body)).toBe(true)
})

test('GET /files/:id 200', async () => {
    const { status, body } = await request(app()).get(`${apiRoot}/${files.id}`)
    expect(status).toBe(200)
    expect(typeof body).toEqual('object')
    expect(body.id).toEqual(files.id)
})

test('GET /files/:id 404', async () => {
    const { status } = await request(app()).get(
        apiRoot + '/123456789098765432123456'
    )
    expect(status).toBe(404)
})

test('PUT /files/:id 200', async () => {
    const { status, body } = await request(app())
        .put(`${apiRoot}/${files.id}`)
        .send({ uploader: 'test', oneTime: 'test', password: 'test' })
    expect(status).toBe(200)
    expect(typeof body).toEqual('object')
    expect(body.id).toEqual(files.id)
    expect(body.uploader).toEqual('test')
    expect(body.oneTime).toEqual('test')
    expect(body.password).toEqual('test')
})

test('PUT /files/:id 404', async () => {
    const { status } = await request(app())
        .put(apiRoot + '/123456789098765432123456')
        .send({ uploader: 'test', oneTime: 'test', password: 'test' })
    expect(status).toBe(404)
})

test('DELETE /files/:id 204', async () => {
    const { status } = await request(app()).delete(`${apiRoot}/${files.id}`)
    expect(status).toBe(204)
})

test('DELETE /files/:id 404', async () => {
    const { status } = await request(app()).delete(
        apiRoot + '/123456789098765432123456'
    )
    expect(status).toBe(404)
})
