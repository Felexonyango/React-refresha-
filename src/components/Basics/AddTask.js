import React,{useState} from 'react'

const AddTask = ({onAddTask}) => {
    const [text,setText]= useState('')

    const handleSubmit=(e)=>{
  
      onAddTask({text})

     e.preventDefault()

     setText('')
    }
  return (
    <div>
  <form onSubmit={handleSubmit}>
    <input type='text'placeholder='Add task'
    value={text} 
    onChange={(e)=>setText(e.target.value)}/>
    
   <input type='submit'value='save value'/>
</form>
    </div>
  )
}

export default AddTask