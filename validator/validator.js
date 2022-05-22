const {check} = require('express-validator')
const {validateResult} = require('../helpers/validatorHelper');

const validateH = [
    check('name')
    .exists()
    .not()
    .isEmpty(),
    (req,res,next) =>{
        validateResult(req,res,next)
    }]

module.exports = { validateH }