const Category = require('../models/category')

const getCategories = async (req, res) => {
    const { limit = 5, init = 0 } = req.query;
    const query = { state: true }

    const [total, categories] = await Promise.all([
        Category.countDocuments(query),
        Category.find(query)
            .populate('user', 'name')
            .skip(Number(init))
            .limit(Number(limit))
    ])

    res.status(200).json({
        total,
        categories
    })
}

const getCategoryById = async (req, res) => {
    const { id } = req.params

    const category = await Category.findById(id).populate('user', 'name')

    res.status(200).json(category)
}

const createCategory = async (req, res) => {
    const name = req.body.name.toUpperCase();

    const categoryDB = await Category.findOne({ name })

    if (categoryDB)
        return res.status(400).json({
            msg: `Category: ${categoryDB.name} is already exists`
        })

    const data = {
        name,
        user: req.user._id
    }

    const category = new Category(data);
    await category.save()

    res.status(201).json(category)
}

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { state, user, ...data } = req.body;

    data.name = data.name.toUpperCase();
    data.user = req.user._id;

    const category = await Category.findByIdAndUpdate(id, data, { new: true })

    res.status(200).json(category)
}

const deleteCategory = async (req, res) => {

    const { id } = req.params
    const categoryDeleted = await Category.findByIdAndUpdate(id, { state: false }, { new: true })

    res.status(200).json(categoryDeleted)
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
}