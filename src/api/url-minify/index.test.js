import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { UrlMinify } from '.'

const app = () => express(apiRoot, routes)

let urlMinify

beforeEach(async () => {
    urlMinify = await UrlMinify.create({})
})

test('POST /url-minify 201', async () => {
    const { status, body } = await request(app())
        .post(`${apiRoot}`)
        .send({ originalURL: 'test', minifiedURL: 'test', minifiedBy: 'test' })
    expect(status).toBe(201)
    expect(typeof body).toEqual('object')
    expect(body.originalURL).toEqual('test')
    expect(body.minifiedURL).toEqual('test')
    expect(body.minifiedBy).toEqual('test')
})

test('GET /url-minify 200', async () => {
    const { status, body } = await request(app()).get(`${apiRoot}`)
    expect(status).toBe(200)
    expect(Array.isArray(body)).toBe(true)
})

test('GET /url-minify/:id 200', async () => {
    const { status, body } = await request(app()).get(
        `${apiRoot}/${urlMinify.id}`
    )
    expect(status).toBe(200)
    expect(typeof body).toEqual('object')
    expect(body.id).toEqual(urlMinify.id)
})

test('GET /url-minify/:id 404', async () => {
    const { status } = await request(app()).get(
        apiRoot + '/123456789098765432123456'
    )
    expect(status).toBe(404)
})

test('PUT /url-minify/:id 200', async () => {
    const { status, body } = await request(app())
        .put(`${apiRoot}/${urlMinify.id}`)
        .send({ originalURL: 'test', minifiedURL: 'test', minifiedBy: 'test' })
    expect(status).toBe(200)
    expect(typeof body).toEqual('object')
    expect(body.id).toEqual(urlMinify.id)
    expect(body.originalURL).toEqual('test')
    expect(body.minifiedURL).toEqual('test')
    expect(body.minifiedBy).toEqual('test')
})

test('PUT /url-minify/:id 404', async () => {
    const { status } = await request(app())
        .put(apiRoot + '/123456789098765432123456')
        .send({ originalURL: 'test', minifiedURL: 'test', minifiedBy: 'test' })
    expect(status).toBe(404)
})

test('DELETE /url-minify/:id 204', async () => {
    const { status } = await request(app()).delete(`${apiRoot}/${urlMinify.id}`)
    expect(status).toBe(204)
})

test('DELETE /url-minify/:id 404', async () => {
    const { status } = await request(app()).delete(
        apiRoot + '/123456789098765432123456'
    )
    expect(status).toBe(404)
})
