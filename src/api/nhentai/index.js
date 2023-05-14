import { Router } from 'express'
import { show, cover, readPage, readAllPages } from './controller'

const router = new Router()

/**
 * @api {get} /nhentai/:id Retrieve nhentai
 * @apiName RetrieveNhentai
 * @apiGroup Nhentai
 * @apiSuccess {Object} nhentai Nhentai's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Nhentai not found.
 */
router.get('/', show)

router.get('/cover/:id', cover)

router.get('/read/:id/:page', readPage)

router.get('/readAll/:id', readAllPages)

export default router
