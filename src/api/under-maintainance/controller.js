export const index = ({ querymen: { query, select, cursor } }, res, next) =>
    res.status(503).json({
        msg: 'Under maintainance',
    })
