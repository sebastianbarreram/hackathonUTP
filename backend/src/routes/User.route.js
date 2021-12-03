const { Router } = require('express')
const router = Router()
const UserCtrl = require('../controllers/User.controller')

router.post('/crear', UserCtrl.crearUsuario)
router.post('/login', UserCtrl.login)
router.get('/listarUsuarios', UserCtrl.listar)
router.get('/listar/:id', UserCtrl.listarId)
router.delete('/eliminar/:id', UserCtrl.eliminar)
router.put('/actualizar/:id', UserCtrl.actualizar)
router.get('/buscar/:nombre', UserCtrl.buscarUsuario)



module.exports = router