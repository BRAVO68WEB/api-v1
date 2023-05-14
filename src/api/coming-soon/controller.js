export const index = (req, res, next) =>
    res.status(503).json({ error: 'Comming Soon' })
