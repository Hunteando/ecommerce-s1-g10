const jwt = require('jsonwebtoken')
const { User } = require('../models')

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token')

    if (!token)
        return res.status(401).json({
            msg: 'There is not token in the request'
        })

    //Verify is valid token
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        const user = await User.findById(uid)

        if (!user)
            return res.status(401).json({
                msg: 'Unauthorized - user doesnt exist'
            })

        //Check if user has state: false
        if (!user.state)
            return res.status(401).json({
                msg: 'Unauthorized - user state: false'
            })


        req.user = user

        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Invalid token'
        })
    }

}

module.exports = {
    validateJWT
}