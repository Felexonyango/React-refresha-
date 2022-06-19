import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement} from  "../../features/counter/counterSlice"

const Counter = () => {
  const count =useSelector((state)=>state.counter.count)

  const dispatch=useDispatch()

  return (
    <div>
      
      <h2>You clicked {count} times </h2>
   <button onClick={()=>dispatch(increment())}>+</button>

     <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter