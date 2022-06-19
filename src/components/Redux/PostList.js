import React,{useEffect} from 'react'
import PostForm from './PostForm'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPosts } from '../../features/Posts/PostSlice'

const PostList = () => {
    const posts = useSelector((state)=>state.posts.posts)
   const status = useSelector((state)=>state.posts.status)
   const error =useSelector((state)=>state.posts.error)

    const dispatch=useDispatch()

    useEffect(()=>{
      if(status==='idle'){

        dispatch(fetchPosts())
      }

    },[status,dispatch])
  return (
    <div className='posts'>
      <PostForm/>
  {posts.map((post)=>(
      <div key={post.id}>
          <h3>{post.title} </h3>
          <h3>{post.body}</h3>
    </div>
  ))}
    </div>
  )
}

export default PostList