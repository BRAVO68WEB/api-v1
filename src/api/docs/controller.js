import docs from './DOCs.json'
export const index = (req, res, next) => {
    res.status(200).send(docs)
}
