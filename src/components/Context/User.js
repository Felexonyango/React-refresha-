import React,{useState,createContext} from 'react'
import Login from './Login'
import Register from './Register'


export const AppContext =createContext(null)

const User = () => {
    const [user,setUser]=useState("")
   

  return (
    <div>

<AppContext.Provider value={{user, setUser}}>
<Login/>
<Register/>
</AppContext.Provider>
    
    </div>
  )
}

export default User