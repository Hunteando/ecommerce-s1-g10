const { Schema, model } = require('mongoose')

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'Category is required'],
        unique: true
    },
    price: {
        type: Number,
        default: 0.0
    },
    image: {
        type: String,
    },
    state: {
        type: Boolean,
        default: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description: {
        type: String
    }
})

ProductSchema.methods.toJSON = function () {
    const { __v, state, ...data } = this.toObject();
    return data
}

module.exports = model('Product', ProductSchema)