const bcryptjs = require('bcryptjs')
const User = require('../models/user')

const getUsers = async (req, res) => {
    const { limit = 5, init = 0 } = req.query;
    const query = { state: true }

    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(init))
            .limit(Number(limit))
    ])

    res.status(200).json({
        total,
        users
    })
}

const createUser = async (req, res) => {
    const { password } = req.body;
    const user = new User(req.body);

    //Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save()

    res.status(201).json(user)
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { _id, password, email, ...rest } = req.body;

    if (password) {
        //Encrypt password
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, rest, { new: true })

    res.status(200).json(user)
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, { state: false })

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}