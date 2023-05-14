import { Router } from 'express'
import Myanimelist, { schema } from './model'
import {
    loginCallback,
    login,
    tokenGrab,
    searchAnime,
    searchManga,
    animeById,
    mangaById,
    animeBySeason,
    userAnimeList,
    me,
} from './controller'
import { authCheck } from '../auth/authCheck'

const router = new Router()
// const { token, lastUpdate } = schema.tree

// router.get('/authKeys', index)

router.get('/callback', loginCallback)

router.get('/login', login)

router.get('/logToken', tokenGrab)

router.get('/anime/search', authCheck, searchAnime)
router.get('/anime/:malId', authCheck, animeById)

router.get('/manga/search', authCheck, searchManga)
router.get('/manga/:malId', authCheck, mangaById)

router.get('/anime/season/:year/:season', authCheck, animeBySeason)

router.get('/userAnimelist/:username', authCheck, userAnimeList)
router.get('/me', me)

export { Myanimelist, schema }
export default router
