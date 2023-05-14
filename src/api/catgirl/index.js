import { Router } from 'express'
import {
    gecg,
    neko,
    nekoGif,
    waifu,
    foxGirl,
    meow,
    hug,
    cuddle,
    kiss,
} from './controller'

const router = new Router()

/**
 * @api {get} /catgirl/:id Retrieve catgirl
 * @apiName RetrieveCatgirl
 * @apiGroup Catgirl
 * @apiSuccess {Object} catgirl Catgirl's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Catgirl not found.
 */
router.get('/gecg', gecg)

router.get('/neko', neko)

router.get('/nekoGif', nekoGif)

router.get('/waifu', waifu)

router.get('/foxGirl', foxGirl)

router.get('/meow', meow)

router.get('/hug', hug)

router.get('/cuddle', cuddle)

router.get('/kiss', kiss)

export default router
