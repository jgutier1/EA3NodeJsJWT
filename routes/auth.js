const { Router } = require('express')
const { register, login }= require('../controllers/auth')

const validarJwt = require("../middlewares/validarJwt");
const { esAdmin } = require("../middlewares/validarRol");

const router = Router()

// TODO:  COlocarle seguridad
/**
 * Registrar usuarios
 */
router.post('/register', validarJwt, esAdmin, register)

/**
 * Login al sistema
 */
router.post('/login', login)

module.exports = router
