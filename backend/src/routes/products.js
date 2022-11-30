const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers');

const { categoryExist, productExist } = require('../helpers/db-validators');

const { validateJWT, validateInput, hasRole, adminRole } = require('../middlewares');


router.get('/', getProducts)

router.get('/:id', [
    check('id', 'Id is invalid').isMongoId(),
    check('id').custom(productExist),
    validateInput
], getProductById)

router.post('/', [
    validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    check('category', 'ID is invalid').isMongoId(),
    check('category').custom(categoryExist),
    validateInput
], createProduct)

router.put('/:id', [
    validateJWT,
    check('id').custom(productExist),
    hasRole('ADMIN_ROLE', 'SALES_ROLE'),
    validateInput
], updateProduct)

router.delete('/:id', [
    validateJWT,
    adminRole,
    check('id', 'ID is invalid').isMongoId(),
    check('id').custom(productExist),
    validateInput
], deleteProduct)

module.exports = router;
