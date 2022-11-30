const auth = require('./auth')
const categories = require('./categories')
const products = require('./products')
const users = require('./users')

module.exports = {
    ...auth,
    ...categories,
    ...products,
    ...users,
}