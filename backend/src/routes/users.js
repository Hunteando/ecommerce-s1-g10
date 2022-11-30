const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');

const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers');

const { isValidRole, emailExist, userIdExist } = require('../helpers/db-validators');

const { validateJWT, adminRole, validateInput, hasRole } = require('../middlewares');


router.get('/', getUsers)

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('email').custom(emailExist),
    check('password', 'Password is required and must have more than 6 characters').isLength({ min: 6 }),
    // check('role', 'The role is not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(isValidRole),
    validateInput
], createUser)

router.put('/:id', [
    check('id', 'ID is not valid').isMongoId(),
    check('id').custom(userIdExist),
    check('role').custom(isValidRole),
    check('password', 'Password is required and must have more than 6 characters').isLength({ min: 6 }),
    validateInput
], updateUser)

router.delete('/:id', [
    validateJWT,
    adminRole,
    // hasRole('ADMIN_ROLE', 'SALES_ROLE'),
    check('id', 'ID is not valid').isMongoId(),
    check('id').custom(userIdExist),
    validateInput
], deleteUser)

module.exports = router;