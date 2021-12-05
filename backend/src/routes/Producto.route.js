const {Router} = require('express')
const router = Router()
const ProductoCtrl = require('../controllers/Producto.controller')

router.post('/crear', ProductoCtrl.crear)
router.get('/listar', ProductoCtrl.listar)
router.get('/listar/:id', ProductoCtrl.listarId)
router.get('/listarPorArtesano/:id', ProductoCtrl.listarPorArtesano)
router.delete('/eliminar/:id', ProductoCtrl.eliminar)
router.put('/actualizar/:id', ProductoCtrl.actualizar)
router.get('/buscarPorArtesano/:nombre/:id', ProductoCtrl.buscarPorArtesano)
router.get('/buscar/:nombre', ProductoCtrl.buscar)

module.exports = router