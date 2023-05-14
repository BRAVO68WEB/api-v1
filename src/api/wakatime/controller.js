import { WakaTime } from 'wakatime'
const wakaTimeInstance = new WakaTime()
import axios from 'axios'
wakaTimeInstance.apiKey = process.env.WAKATIME_TOKEN

export const stats = ({ params }, res, next) => {
    wakaTimeInstance
        .stats('last_7_days')
        .then((resp) => res.json({ resp }))
        .catch((err) => console.log(err))
}
export const summaryLatest = ({ params }, res, next) => {
    wakaTimeInstance
        .summaries({
            start: new Date(),
            end: new Date(),
        })
        .then((resp) => res.json({ resp }))
        .catch((err) => console.log(err))
}
export const languageUsage = ({ params }, res, next) => {
    const config = {
        method: 'get',
        url: 'https://wakatime.com/share/@Bravo68web/1c9ba63a-0c4e-4585-9389-34caf67b778d.json',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    axios(config)
        .then((resp) => {
            let langUsedByMe = resp.data.data
            let willReturn = []
            for (let i = 0; i < langUsedByMe.length; i++) {
                if (langUsedByMe[i].percent > 0) {
                    willReturn.push(langUsedByMe[i])
                }
            }
            res.json(willReturn)
        })
        .catch((err) => console.log(err))
}
export const summary = ({ params }, res, next) => {
    wakaTimeInstance
        .summaries({
            start: params.from,
            end: params.to,
        })
        .then((resp) => res.json({ resp }))
        .catch((err) => console.log(err))
}
export const profile = ({ params }, res, next) => {
    wakaTimeInstance
        .currentUser()
        .then((resp) => res.json({ resp }))
        .catch((err) => console.log(err))
}
export const statsAlltime = ({ params }, res, next) => {
    wakaTimeInstance
        .stats('all_time')
        .then((resp) => res.json({ resp }))
        .catch((err) => console.log(err))
}
export const statsAllTimev2 = ({ params }, res, next) => {
    const config = {
        method: 'get',
        url: 'https://wakatime.com/share/@Bravo68web/b691f693-916c-4385-a0d2-1797bad581f9.json',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    axios
        .get(config)
        .then((resp) => res.json({ resp }))
        .catch((err) => console.log(err))
}
export const statsByLimit = ({ params }, res, next) => {
    wakaTimeInstance
        .stats(`${params.limit}`)
        .then((resp) => res.json({ resp }))
        .catch((err) => console.log(err))
}
// AIO Stats
export const codeTimeAllTime = (req, res) => {
    const config = {
        method: 'get',
        url:
            'https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=' +
            process.env.WAKATIME_TOKEN,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    axios(config)
        .then((resp) => {
            res.json({ data: resp.data.data.text })
        })
        .catch((err) => console.log(err))
}
// AIO Code Data basics
export const codeStatsLast7Days = (req, res) => {
    const config = {
        method: 'get',
        url:
            'https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=' +
            process.env.WAKATIME_TOKEN,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    axios(config)
        .then((resp) => {
            res.json({
                main: resp.data.data.categories[0].text,
                avg: resp.data.data
                    .human_readable_daily_average_including_other_language,
            })
        })
        .catch((err) => console.log(err))
}
export const languageUsageInLast7Days = ({ params }, res, next) => {
    const config = {
        method: 'get',
        url:
            'https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=' +
            process.env.WAKATIME_TOKEN,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    axios(config)
        .then((resp) => {
            res.json(resp.data.data.languages)
        })
        .catch((err) => console.log(err))
}
