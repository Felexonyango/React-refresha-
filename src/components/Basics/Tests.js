import React,{useState} from 'react'
import Test from './Test'
import AddTask from './AddTask'
const Tests = () => {
    const [tasks,setTasks]=useState([
{
    id:1,
    text:'I  am refreshing on  react js',
    iscomplete:true
},
{
    id:2,
    text:'I am done with school',
    iscomplete:true
},
{
    id:3,
    text:'I am senior developer',
    iscomplete:true
},
{
    id:4,
    text:'I dont have a gf',
    iscomplete:false
}

    ])


    const addTask=(task)=>{
        
        const newTask ={...task}
        setTasks([...tasks, newTask])
    
    }
    
  return (
    <>
    <AddTask onAddTask ={addTask}/>
  {tasks.map((task)=>(

        <Test key={task.id} task ={task}/>
))}


    </>
  )
}

export default Tests