import { Myanimelist } from '../../api/myanimelist'

let malAuthKey = {}

let getAccessToken = async () => {
    await Myanimelist.find({}).then((data) => {
        malAuthKey = data
    })
    return malAuthKey
}
// console.log(malAuthKey)
getAccessToken()

export default getAccessToken
