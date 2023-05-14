import { Router } from 'express'
import {
    summary,
    profile,
    stats,
    statsByLimit,
    statsAlltime,
    summaryLatest,
    languageUsage,
    codeTimeAllTime,
    codeStatsLast7Days,
    languageUsageInLast7Days,
} from './controller'

const router = new Router()

/**
 * @api {get} /wakatime/:id Retrieve wakatime
 * @apiName RetrieveWakatime
 * @apiGroup Wakatime
 * @apiSuccess {Object} wakatime Wakatime's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Wakatime not found.
 */
router.get('/me', profile)
router.get('/stats', stats)
router.get('/summary', summaryLatest)
router.get('/summary/:from/:to', summary)
router.get('/stats/:limit', statsByLimit)
router.get('/stats/alltime', statsAlltime)
router.get('/languageUsage', languageUsage)
router.get('/codeTimeAllTime', codeTimeAllTime)
router.get('/codeStatsLast7Days', codeStatsLast7Days)
router.get('/languageUsageInLast7Days', languageUsageInLast7Days)

export default router
