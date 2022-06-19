import React,{useContext} from 'react'
import { AppContext } from './User'


const Login = () => {
    const {setUser} =useContext(AppContext)
  return (
    <div>
        <input type='text' onChange={(e)=>setUser(e.target.value)}/>

    </div>
  )
}

export default Login