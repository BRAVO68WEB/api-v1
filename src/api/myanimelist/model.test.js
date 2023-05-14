import { Myanimelist } from '.'

let myanimelist

beforeEach(async () => {
    myanimelist = await Myanimelist.create({
        token: 'test',
        lastUpdate: 'test',
        updateCount: 'test',
    })
})

describe('view', () => {
    it('returns simple view', () => {
        const view = myanimelist.view()
        expect(typeof view).toBe('object')
        expect(view.id).toBe(myanimelist.id)
        expect(view.token).toBe(myanimelist.token)
        expect(view.lastUpdate).toBe(myanimelist.lastUpdate)
        expect(view.updateCount).toBe(myanimelist.updateCount)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })

    it('returns full view', () => {
        const view = myanimelist.view(true)
        expect(typeof view).toBe('object')
        expect(view.id).toBe(myanimelist.id)
        expect(view.token).toBe(myanimelist.token)
        expect(view.lastUpdate).toBe(myanimelist.lastUpdate)
        expect(view.updateCount).toBe(myanimelist.updateCount)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })
})
