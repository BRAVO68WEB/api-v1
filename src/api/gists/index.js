import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Todo, { schema } from './model'
import { authCheckAdmin } from '../auth/authCheckAdmin'
import { authCheck } from '../auth/authCheck'

const router = new Router()
const { title, short, message, tags } = schema.tree

/**
 * @api {post} /todos Create todo
 * @apiName CreateTodo
 * @apiGroup Todo
 * @apiParam title Todo's title.
 * @apiParam short Todo's short.
 * @apiParam message Todo's message.
 * @apiParam tags Todo's tags.
 * @apiSuccess {Object} todo Todo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Todo not found.
 */
router.post('/', body({ title, short, message, tags }), create)

/**
 * @api {get} /todos Retrieve todos
 * @apiName RetrieveTodos
 * @apiGroup Todo
 * @apiUse listParams
 * @apiSuccess {Object[]} todos List of todos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /todos/:id Retrieve todo
 * @apiName RetrieveTodo
 * @apiGroup Todo
 * @apiSuccess {Object} todo Todo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Todo not found.
 */
router.get('/:id', show)

/**
 * @api {put} /todos/:id Update todo
 * @apiName UpdateTodo
 * @apiGroup Todo
 * @apiParam title Todo's title.
 * @apiParam short Todo's short.
 * @apiParam message Todo's message.
 * @apiParam tags Todo's tags.
 * @apiSuccess {Object} todo Todo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Todo not found.
 */
router.put(
    '/:id',
    body({ title, short, message, tags }),
    authCheckAdmin,
    update
)

/**
 * @api {delete} /todos/:id Delete todo
 * @apiName DeleteTodo
 * @apiGroup Todo
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Todo not found.
 */
router.delete('/:id', authCheckAdmin, destroy)

export default router
