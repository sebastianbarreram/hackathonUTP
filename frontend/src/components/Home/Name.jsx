import React from 'react'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'

function Name() {
    let users=[]
    let productos=[]
    let nombres=[]

    useEffect(() => {
        setTimeout(() => {
            cargarNombre();
        }, 1500);
       
        obtenerProducts();
        obtenerUsers();
    });
    
    const obtenerUsers = async () => {
        const respuesta = await Axios.get('user/listarUsuarios/');
        users = respuesta.data
        console.log(users)
        //alert(users)
    }

    const obtenerProducts = async () => {
        const respuesta = await Axios.get('producto/listar/');
        productos = respuesta.data
        console.log(productos)
       // alert(productos)
    }

    const cargarNombre = async() => {
      
        for (let i = 0; i < productos.length; i++) {
            
               for (let j = 0; j < users.length; j++) {
                   if(productos[i].artesano===users[j]._id){
                       await nombres.push({artesano: users[j].nombre,
                       })
                                    alert(users[j].nombre)
                                    console.log(users[j].nombre)
                   }
                   
            
                
            }
            
        }
    }

    return (
        <div>
             <table className="table table-responsive-lg table-striped">
                           <thead className='thead-dark'>
                               <tr>
                               <th scope="col">#</th>
                               <th scope="col">EVALUACION</th>
                               {/* <th scope="col">ESTUDIANTE</th> */}
                               <th scope="col">NOTA</th>
                               </tr>
                           </thead>
                           <tbody>
                               {   nombres.map((tab,i)=>(
                                   <tr key={i}>
                                   {/* <td>{i+1}</td>     */}
                                   <td>{tab.artesano}</td>
                                   {/* <td>{tab.estudianteId}</td> */}
                                   <td></td>
                                   </tr>
                               ))
                              }
                           </tbody>
                           </table>
           
        </div>
    )
}

export default Name
