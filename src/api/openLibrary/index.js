import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /olib/:id Retrieve open library
 * @apiName RetrieveOpenLibrary
 * @apiGroup OpenLibrary
 * @apiSuccess {Object} openLibrary Open library's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Open library not found.
 */
router.get('/:id',
  show)

export default router
