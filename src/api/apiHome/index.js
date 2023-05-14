import express, { Router } from 'express'
let path = require('path')
let publicView = path.join(__dirname, 'public')

const router = new Router()

/**
 * @api {get} /api/:id Retrieve api home
 * @apiName RetrieveApiHome
 * @apiGroup ApiHome
 * @apiSuccess {Object} apiHome Api home's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Api home not found.
 */
// router.get("/:id", show);
router.use('/', express.static(publicView))

export default router
