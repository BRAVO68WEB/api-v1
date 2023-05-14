let axios = require('axios')
export const gitlabUserData = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://gitlab.com/api/v4/users?username=bravo68web',
    }

    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const gitlabUserRepos = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://gitlab.com/api/v4/users/4419151/projects',
    }

    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
