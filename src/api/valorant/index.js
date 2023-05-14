import { Router } from 'express'
import {
    compWeapons,
    unratedWeapons,
    spikeWeapons,
    deathmatchWeapons,
    compAgents,
    unratedAgents,
    spikeAgents,
    deathmatchAgents,
    compMaps,
    unratedMaps,
    spikeMaps,
    deathmatchMaps,
    compTeammates,
    unratedTeammates,
    spikeTeammates,
    deathmatchTeammates,
    compMatchs,
    unratedMatchs,
    spikeMatchs,
    deathmatchMatchs,
    profile,
} from './controller'

const router = new Router()

/**
 * @api {get} /valorant/:id Retrieve valorant
 * @apiName RetrieveValorant
 * @apiGroup Valorant
 * @apiSuccess {Object} valorant Valorant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Valorant not found.
 */
router.get('/me', profile)

router.get('/weapon/competitive', compWeapons)
router.get('/weapon/unrated', unratedWeapons)
router.get('/weapon/spikerush', spikeWeapons)
router.get('/weapon/deathmatch', deathmatchWeapons)

router.get('/map/competitive', compMaps)
router.get('/map/unrated', unratedMaps)
router.get('/map/spikerush', spikeMaps)
router.get('/map/deathmatch', deathmatchMaps)

router.get('/agent/competitive', compAgents)
router.get('/agent/unrated', unratedAgents)
router.get('/agent/spikerush', spikeAgents)
router.get('/agent/deathmatch', deathmatchAgents)

router.get('/match/competitive', compMatchs)
router.get('/match/unrated', unratedMatchs)
router.get('/match/spikerush', spikeMatchs)
router.get('/match/deathmatch', deathmatchMatchs)

router.get('/teammate/competitive', compTeammates)
router.get('/teammate/unrated', unratedTeammates)
router.get('/teammate/spikerush', spikeTeammates)
router.get('/teammate/deathmatch', deathmatchTeammates)

export default router
