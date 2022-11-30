const { response } = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user');
const { generateJWT } = require('../helpers/generateJWT');

const login = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        //Email exist
        const user = await User.findOne({ email })

        if (!user)
            return res.status(400).json({
                msg: 'User / password is invalid - email'
            })

        //User is active
        if (!user.state)
            return res.status(400).json({
                msg: 'User / password is invalid - state: false'
            })

        //Check password
        const passwordValid = bcryptjs.compareSync(password, user.password)
        if (!passwordValid)
            return res.status(400).json({
                msg: 'User / password is invalid - password'
            })

        //Generate JWT
        const token = await generateJWT(user.id)

        res.status(200).json({
            user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Please contact the admin'
        })
    }
}

module.exports = {
    login
}