let hashnode = require('hashnode-sdk-js')
import axios from 'axios'

export const show = (req, res, next) => {
    hashnode.findUser('bravo68web').then((data) => res.json(data))
}

export const showAll = (req, res, next) => {
    let config_hn_user = {
        method: 'post',
        url: 'https://api.hashnode.com/',
        data: {
            query: `
            {
                user(username: "bravo68web"){
                  username
                  name
                  tagline
                  numReactions
                  dateJoined
                  socialMedia {
                    twitter
                    github
                    stackoverflow
                    linkedin
                    website
                    facebook
                  }
                  numPosts
                  numFollowing
                  numFollowers
                  location
                  photo
                  coverImage
                  publicationDomain
                  blogHandle
                }
              }
            `,
        },
        headers: {},
    }
    axios(config_hn_user)
        .then(function (response) {
            // console.log(response.data)
            res.json(response.data.data.user)
        })
        .catch(function (error) {
            console.log(error)
        })
}
