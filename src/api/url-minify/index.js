import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import {
    create,
    index,
    show,
    update,
    destroy,
    indexForUser,
    shortCodeRef,
} from './controller'
import { schema } from './model'
export UrlMinify, { schema } from './model'
import { authCheck } from '../auth/authCheck'
import { authCheckAdmin } from '../auth/authCheckAdmin'

const router = new Router()
const { originalURL, minifiedURL, minifiedBy } = schema.tree
/**
 * @api {post} /urlMinify Create url minify
 * @apiName CreateUrlMinify
 * @apiGroup UrlMinify
 * @apiParam originalURL Url minify's originalURL.
 * @apiParam minifiedURL Url minify's minifiedURL.
 * @apiParam minifiedBy Url minify's minifiedBy.
 * @apiSuccess {Object} urlMinify Url minify's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Url minify not found.
 */
router.post('/', body({ originalURL }), authCheck, create)

/**
 * @api {get} /urlMinify Retrieve url minifies
 * @apiName RetrieveUrlMinifies
 * @apiGroup UrlMinify
 * @apiUse listParams
 * @apiSuccess {Object[]} urlMinifies List of url minifies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/all', query(), authCheckAdmin, index)

router.get('/', query(), authCheck, indexForUser)

/**
 * @api {get} /urlMinify/:id Retrieve url minify
 * @apiName RetrieveUrlMinify
 * @apiGroup UrlMinify
 * @apiSuccess {Object} urlMinify Url minify's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Url minify not found.
 */
router.get('/:id', authCheck, show)

router.get('/short/:code', authCheck, shortCodeRef)

/**
 * @api {put} /urlMinify/:id Update url minify
 * @apiName UpdateUrlMinify
 * @apiGroup UrlMinify
 * @apiParam originalURL Url minify's originalURL.
 * @apiParam minifiedURL Url minify's minifiedURL.
 * @apiParam minifiedBy Url minify's minifiedBy.
 * @apiSuccess {Object} urlMinify Url minify's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Url minify not found.
 */
// router.put(
//   "/:id",
//   body({ originalURL, minifiedURL, minifiedBy }),
//   authCheck,
//   update
// );

/**
 * @api {delete} /urlMinify/:id Delete url minify
 * @apiName DeleteUrlMinify
 * @apiGroup UrlMinify
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Url minify not found.
 */
// router.delete("/:id", authCheck, destroy);

export default router
