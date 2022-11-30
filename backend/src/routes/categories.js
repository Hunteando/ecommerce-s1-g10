const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');

const {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers');

const { categoryExist } = require('../helpers/db-validators');
const { hasRole, adminRole, validateInput, validateJWT } = require('../middlewares');

router.get('/', getCategories)

router.get('/:id', [
    check('id', 'ID is not valid').isMongoId(),
    check('id').custom(categoryExist),
    validateInput
], getCategoryById)

router.post('/', [
    validateJWT,
    check('name', 'Name is required').not().isEmpty(),
    validateInput
], createCategory)

router.put('/:id', [
    validateJWT,
    hasRole('ADMIN_ROLE', 'SALES_ROLE'),
    check('name', 'Name is required').not().isEmpty(),
    check('id').custom(categoryExist),
    validateInput
], updateCategory)

router.delete('/:id', [
    validateJWT,
    adminRole,
    check('id', 'ID is not valid').isMongoId(),
    check('id').custom(categoryExist),
    validateInput
], deleteCategory)

module.exports = router;