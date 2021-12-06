import React from 'react'

import { Route,  Redirect} from 'react-router'

const estaAutenticado=()=>{

    const token=sessionStorage.getItem('token')
 
    if(token){
  
      return true 
    }
    else{
      return false
  
    }
  }
const PrivateRouter =({component: Component, ...rest}) => {
    return (

        <Route {...rest}>
            {estaAutenticado()?<Component/>: <Redirect to='/login'/>}
        </Route>
        
    )
}

export default PrivateRouter
