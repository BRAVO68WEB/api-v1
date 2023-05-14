import { UrlMinify } from '.'

let urlMinify

beforeEach(async () => {
    urlMinify = await UrlMinify.create({
        originalURL: 'test',
        minifiedURL: 'test',
        minifiedBy: 'test',
    })
})

describe('view', () => {
    it('returns simple view', () => {
        const view = urlMinify.view()
        expect(typeof view).toBe('object')
        expect(view.id).toBe(urlMinify.id)
        expect(view.originalURL).toBe(urlMinify.originalURL)
        expect(view.minifiedURL).toBe(urlMinify.minifiedURL)
        expect(view.minifiedBy).toBe(urlMinify.minifiedBy)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })

    it('returns full view', () => {
        const view = urlMinify.view(true)
        expect(typeof view).toBe('object')
        expect(view.id).toBe(urlMinify.id)
        expect(view.originalURL).toBe(urlMinify.originalURL)
        expect(view.minifiedURL).toBe(urlMinify.minifiedURL)
        expect(view.minifiedBy).toBe(urlMinify.minifiedBy)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })
})
