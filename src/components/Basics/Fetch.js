import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Fetch = () => {
    const [datas,setDatas]=useState([])

    const fetchData =async()=>{
        const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data
        setDatas(data)
    }

    useEffect(()=>{
        fetchData()
 
    },[])


  return (
    <div>
  <h2>Data fetching  and mapping</h2>

  {datas.map((data)=>(
 <div key={data.id}>
     <h4> {data.title}</h4>
     </div>
  ))}


    </div>
  )
}

export default Fetch