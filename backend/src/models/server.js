const express = require('express')
const morgan = require('morgan')
const { connDB } = require('../database/config')
const server = express()

// Body Parser
server.use(express.json())

//Morgan
server.use(morgan('dev'))

// Routes Paths
const paths = {
    auth:       '/api/auth',
    categories: '/api/categories',
    products:   '/api/products',
    users:      '/api/users',
}

//Routes
server.use(paths.auth,          require('../routes/auth'))
server.use(paths.categories,    require('../routes/categories'))
server.use(paths.products,      require('../routes/products'))
server.use(paths.users,         require('../routes/users'))

//DB Connection
connDB()

module.exports = server;