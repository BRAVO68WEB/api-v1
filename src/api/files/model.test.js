import { Files } from '.'

let files

beforeEach(async () => {
    files = await Files.create({
        uploader: 'test',
        oneTime: 'test',
        password: 'test',
    })
})

describe('view', () => {
    it('returns simple view', () => {
        const view = files.view()
        expect(typeof view).toBe('object')
        expect(view.id).toBe(files.id)
        expect(view.uploader).toBe(files.uploader)
        expect(view.oneTime).toBe(files.oneTime)
        expect(view.password).toBe(files.password)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })

    it('returns full view', () => {
        const view = files.view(true)
        expect(typeof view).toBe('object')
        expect(view.id).toBe(files.id)
        expect(view.uploader).toBe(files.uploader)
        expect(view.oneTime).toBe(files.oneTime)
        expect(view.password).toBe(files.password)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })
})
