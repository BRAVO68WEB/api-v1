import { Todo } from '.'

let todo

beforeEach(async () => {
    todo = await Todo.create({
        title: 'test',
        short: 'test',
        message: 'test',
        tags: 'test',
    })
})

describe('view', () => {
    it('returns simple view', () => {
        const view = todo.view()
        expect(typeof view).toBe('object')
        expect(view.id).toBe(todo.id)
        expect(view.title).toBe(todo.title)
        expect(view.short).toBe(todo.short)
        expect(view.message).toBe(todo.message)
        expect(view.tags).toBe(todo.tags)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })

    it('returns full view', () => {
        const view = todo.view(true)
        expect(typeof view).toBe('object')
        expect(view.id).toBe(todo.id)
        expect(view.title).toBe(todo.title)
        expect(view.short).toBe(todo.short)
        expect(view.message).toBe(todo.message)
        expect(view.tags).toBe(todo.tags)
        expect(view.createdAt).toBeTruthy()
        expect(view.updatedAt).toBeTruthy()
    })
})
