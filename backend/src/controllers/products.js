const { Product } = require('../models')

const getProducts = async (req, res) => {
    const { limit = 5, init = 0 } = req.query;
    const query = { state: true }

    const [total, products] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query)
            .populate('user', 'name')
            .populate('category', 'name')
            .skip(Number(init))
            .limit(Number(limit))
    ])

    res.status(200).json({
        total,
        products
    })
}

const getProductById = async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id)
        .populate('user', 'name')
        .populate('category', 'name')

    res.status(200).json(product)
}

const createProduct = async (req, res) => {
    const { state, user, ...body } = req.body;

    const productDB = await Product.findOne({ name: body.name })

    if (productDB)
        return res.status(400).json({
            msg: `Product: ${productDB.name} is already exists`
        })

    const data = {
        ...body,
        name: body.name.toUpperCase(),
        user: req.user._id
    }

    const product = new Product(data);
    await product.save()

    res.status(201).json(product)
}

const updateProduct = async (req, res) => {

    const { id } = req.params
    const { state, user, ...data } = req.body;

    if (data.name)
        data.name = data.name.toUpperCase()

    data.user = req.user._id

    const productUpdated = await Product.findByIdAndUpdate(id, data, { new: true })

    res.status(200).json(productUpdated)
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    const productDeleted = await Product.findByIdAndUpdate(id, { state: false }, { new: true })


    res.status(200).json(productDeleted)
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}