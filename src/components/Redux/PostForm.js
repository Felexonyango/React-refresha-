import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addPost} from "../../features/Posts/PostSlice"

const PostForm = () => {
 
   const [title,setTitle]=useState("")
   const[body,setBody]=useState("")

   const dispatch =useDispatch()
    const handleSubmit=(e)=>{
     e.preventDefault()

  dispatch(addPost({title,body}))
  setTitle("")
  setBody("")
}


  return (
    <div>

      <form onSubmit={handleSubmit} >
        <input type='text' 
        placeholder='title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>

        <input type='text' 
        placeholder='Enter body'
        value={body}
        onChange={(e)=>setBody(e.target.value)}/>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default PostForm