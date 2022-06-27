import React,{useState,useCallback} from 'react'  
import Title from './Title'
import Count from './Count'
import Button from './Button'
const UseCallback = () => {

  const [age,setAage]=useState(20)
  const [salary,setSalary]=useState(2000)

  const incrementAge =useCallback(()=>{
    setAage(age+1)

  },[age])
  const incrementSalary= useCallback(()=>{

    setSalary(salary+1000)
  },[salary])

  return (
    <div>
<Title/>
<Count text="age" count={age}/>
<Button handleClick={incrementAge}>incrementAge</Button>
<Count text="salary" count={salary}/>
<Button handleClick={incrementSalary}>increment Salary</Button>
        
    </div>
  )
}

export default UseCallback