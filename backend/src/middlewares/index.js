const validateInput = require('../middlewares/input-validator');
const validateJWT = require('../middlewares/validate-jwt');
const validateRoles = require('../middlewares/validate-roles');

module.exports = {
    ...validateInput,
    ...validateJWT,
    ...validateRoles
}