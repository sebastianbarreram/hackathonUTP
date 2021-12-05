const ProductoCtrl = {}
const Producto = require('../models/Producto.model')

ProductoCtrl.crear = async(req,res)=>{
    const {nombre, descripcion, imagen, material, precio, estado,artesano}=req.body
    const NuevoProducto= new Producto({
        nombre, 
        descripcion, 
        imagen, 
        material, 
        precio, 
        estado,
        artesano
    })

    const respuesta = await NuevoProducto.save()

    res.json({
        mensaje: 'Producto agregado',
        respuesta
    })
}

ProductoCtrl.listar = async(req,res)=>{
    const respuesta = await Producto.find()
    res.json(respuesta)
}

ProductoCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Producto.findById({_id:id})
    res.json(respuesta)
}


ProductoCtrl.listarPorArtesano = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Producto.find({artesano:id})
    res.json(respuesta)
}

ProductoCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Producto.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Producto eliminado correctamente'
    })
}

ProductoCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Producto.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Producto modificado'
    })
}

ProductoCtrl.buscarPorArtesano = async(req,res)=>{ //Para que el artesano busque en sus productos
    const {nombre, id} = req.params
    const respuesta = await Producto.find({nombre:{ $regex:".*" +nombre+ ".*"}, artesano:id})
    res.json(respuesta)

}

ProductoCtrl.buscar = async(req,res)=>{ //busqueda global para los clientes
    const nombre = req.params.nombre
    const respuesta = await Producto.find({nombre:{ $regex:".*"+nombre+".*"}})
    res.json(respuesta)
}

module.exports = ProductoCtrl