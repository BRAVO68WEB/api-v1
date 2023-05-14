import axios from 'axios'

export default async (longurl, shortCode) => {
    let minifiedURL
    let config = {
        method: 'post',
        url: `${process.env.SHLINK_API_HOST}/rest/v2/short-urls`,
        headers: {
            accept: 'application/json',
            'X-Api-Key': `${process.env.SHLINK_API_KEY}`,
        },
        data: {
            longUrl: longurl,
            customSlug: shortCode,
        },
    }
    axios(config)
        .then(function (response) {
            minifiedURL = response.data.shortUrl
            return minifiedURL
        })
        .catch(function (error) {
            console.log(error)
        })
}
