
const adminRole = (req, res, next) => {

    if (!req.user)
        res.status(500).json({
            msg: 'Check token first before verify role'
        })

    const { role, name } = req.user

    if (role !== 'ADMIN_ROLE')
        return res.status(401).json({
            msg: `Unauthorized - ${name} is not admin`
        })

    next()
}

const hasRole = (...roles) => {
    return (req, res, next) => {
        const {role, name} = req.user;

        if (!req.user)
            res.status(500).json({
                msg: 'Check token first before verify role'
            })

        if (!roles.includes(role))
            return res.status(401).json({
                msg:`Unauthorized - User: ${name} is not allowed`
            })

        next()
    }
}

module.exports = {
    adminRole,
    hasRole
}