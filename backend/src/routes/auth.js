const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers');
const { validateInput } = require('../middlewares');

const router = Router();

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateInput
], login)


module.exports = router;