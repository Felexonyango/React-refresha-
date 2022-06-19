import React,{useContext} from 'react'
import { AppContext } from './User'

const Register = () => {
    const {user}=useContext(AppContext)
  return (
    <div>
 <h1>HI: {user}</h1>
    </div>
  )
}

export default Register