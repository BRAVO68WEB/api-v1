export const index = ({ querymen: { query, select, cursor } }, res, next) =>
    res.status(500).json({ msg: 'Error Occured' })
