const { Osu } = require('osu-wrapper')
const client = new Osu(process.env.OSU_API_KEY)
const { v1, v2, auth } = require('osu-api-extended')

auth.login_lazer(process.env.OSU_USERNAME, process.env.OSU_PASSWORD)

export const userData = ({ body }, res) => {
    async function user() {
        const result = await client.getUser({ u: 'bravo68web', m: '0' })
        return res.send(result)
    }
    user()
}
export const recentPlay = ({ body }, res) => {
    async function recent() {
        const result = await client.getRecent({ u: 'bravo68web', m: '0' })
        return res.send(result)
    }
    recent()
}
export const bestScores = ({ body }, res) => {
    async function best() {
        const result = await client.getBest({ u: 'bravo68web', m: '0' })
        return res.send(result)
    }
    best()
}
export const beatmapScore = (req, res) => {
    let beatmapId = req.params.mapid
    async function beatmapScore() {
        const result = await client.getScores({
            u: 'bravo68web',
            m: '0',
            b: beatmapId,
        })
        return res.send(result)
    }
    beatmapScore()
}

export const userDataAll = (req, res) => {
    if (
        (req.query.gameMode == null) &
        (!req.query.gameMode >= 0) &
        (!req.query.gameMode < 5)
    ) {
        req.query.gameMode = 0
    }
    async function user() {
        const result = await client.getUser({
            u: `${req.params.username}`,
            m: `${req.query.gameMode}`,
        })
        return res.send(result)
    }
    user()
}
export const recentPlayAll = (req, res) => {
    if (
        (req.query.gameMode == null) &
        (!req.query.gameMode >= 0) &
        (!req.query.gameMode < 5)
    ) {
        req.query.gameMode = 0
    }
    async function recent() {
        const result = await client.getRecent({
            u: `${req.params.username}`,
            m: `${req.query.gameMode}`,
        })
        return res.send(result)
    }
    recent()
}
export const bestScoresAll = (req, res) => {
    if (
        (req.query.gameMode == null) &
        (!req.query.gameMode >= 0) &
        (!req.query.gameMode < 5)
    ) {
        req.query.gameMode = 0
    }
    async function best() {
        const result = await client.getBest({
            u: `${req.params.username}`,
            m: `${req.query.gameMode}`,
        })
        return res.send(result)
    }
    best()
}
export const beatmapScoreAll = (req, res) => {
    if (
        (req.query.gameMode == null) &
        (!req.query.gameMode >= 0) &
        (!req.query.gameMode < 5)
    ) {
        req.query.gameMode = 0
    }
    let beatmapId = req.params.mapid
    async function beatmapScore() {
        const result = await client.getScores({
            u: `${req.params.username}`,
            m: `${req.query.gameMode}`,
            b: beatmapId,
        })
        return res.send(result)
    }
    beatmapScore()
}

export const userInfov2 = async (req, res) => {
    const data = await v2.user.me.details('osu')
    return res.json(data)
}
export const bestScoresv2 = async (req, res) => {
    const data = await v2.user.scores.category(15227110, 'best', 'osu', 5)
    // let data = "W.I.P"
    return res.json(data)
}
export const recentScoresv2 = async (req, res) => {
    const data = await v2.user.scores.category(
        15227110,
        'recent',
        '0',
        'osu',
        5
    )
    return res.json(data)
}
export const favouriteBeatmapsv2 = async (req, res) => {
    const data = await v2.user.beatmaps.most_played(15227110, 10)
    return res.json(data)
}
export const beatmapsScorev2 = async (req, res) => {
    const data = await v2.scores.details(req.params.scoreId, 'osu')
    return res.json(data)
}
