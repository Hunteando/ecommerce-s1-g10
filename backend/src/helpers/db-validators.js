const { Category, Role, User, Product } = require('../models')
// const Role = require('../models/role')
// const User = require('../models/user')


const isValidRole = async (role = '') => {
    const roleExist = await Role.findOne({ role })

    if (!roleExist) throw new Error(`Role ${role} is not valid`)
}

const emailExist = async (email) => {
    const exist = await User.findOne({ email });

    if (exist) throw new Error(`The email: ${email} already exists`)
}

const userIdExist = async (id) => {
    const exist = await User.findById(id);

    if (!exist) throw new Error(`User with Id: ${id} doesn't exists`)
}

const categoryExist = async (id) => {
    const exist = await Category.findById(id);

    if (!exist) throw new Error(`Category with id: ${id} doesn't exists`)
}

const productExist = async (id) => {
    const exist = await Product.findById(id);

    if (!exist) throw new Error(`Product with id: ${id} doesnt exists`)
}




module.exports = {
    isValidRole,
    emailExist,
    userIdExist,
    categoryExist,
    productExist
}