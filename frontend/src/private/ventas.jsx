import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'

function Ventas() {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState('')
    const [material, setMaterial] = useState('')
    const [precio, setPrecio] = useState('')

    const setimagenProducto = async (e) =>{
        
      const file= e.target.files[0];
      const base64 = await convertBase64(file);
      setImagen(base64)
      
  }
  const convertBase64=(file)=>{
    return new Promise ((resolve, reject)=>{
  
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () =>{
            resolve(fileReader.result)
        }
        fileReader.oneerror = (error)=>{
            reject(error)
        }
    })
  }

    const guardar = async(e)=>{
        e.preventDefault()
        const producto= {
            nombre, 
            descripcion, 
            imagen, 
            material, 
            precio, 
            artesano: sessionStorage.getItem('idusuario')
    
        }
    
        if(nombre===""){
    
          Swal.fire({
            icon:'error',
            title:"Debe escribir un nombre",
            showConfirmButton:false,
            timer:1500
          })
    
        }
        if(descripcion===""){
    
            Swal.fire({
              icon:'error',
              title:"Debe escribir una descripcion",
              showConfirmButton:false,
              timer:1500
            })
      
        }
        if(precio===0){
    
            Swal.fire({
              icon:'error',
              title:"Debe escribir un nombre",
              showConfirmButton:false,
              timer:1500
            })
      
        }
    
    
        else if(material===""){
    
          Swal.fire({
            icon:'error',
            title:"Debe escribir un material",
            showConfirmButton:false,
            timer:1500
          })
    
        }
    
    
        else {
    
          const token = sessionStorage.getItem('token')
          const respuesta = await Axios.post('/producto/crear',producto)
          const mensaje= respuesta.data.mensaje
          console.log(mensaje)
    
    
          Swal.fire({
            icon:'success',
            title:mensaje,
            showConfirmButton:false,
            timer:1500
          })
    
          e.target.reset();
          setNombre("");
          setDescripcion("");
          setMaterial("");
          setPrecio("");
    
        }
      }
    

    return (
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-cart-plus"></i>
              </div>
              <div className="mb-3 mt-3">
                        <label htmlFor="formFile" className="form-label"><strong>Ingresa la imagen de tu producto</strong></label>
                        <input type="file" className="form-control" id="formfile" accept=".jpg, .jpeg, .png"  onChange={(e) => {setimagenProducto(e);}} />

                    </div>
                    <br />
                    <img  className="d-flex rounded align-self-center" src={imagen} alt="" width="200px"/>
                    <br />
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Nombre del producto</label>
                      <input type="text" className="form-control required" onChange={(e)=>setNombre(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                      <label>Descripción</label>
                      <input type="text" className="form-control required" onChange={(e)=>setDescripcion(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label>Material</label>
                      <input type="text" className="form-control required" onChange={(e)=>setMaterial(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label>Precio</label>
                      <input type="text" className="form-control required" onChange={(e)=>setPrecio(e.target.value)} />
                    </div>
                  </div>
                    <br />
                  <button type="submit" class="btn btn-outline-dark card-header text-center" style={{background:"rgb(0,0,0,0.4)",border:"none"}}>
                      
                    <span class="fa fa-save"></span> Añadir producto
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Ventas
