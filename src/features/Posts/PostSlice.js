import {createSlice,nanoid,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const POSTURL ="https://jsonplaceholder.typicode.com/posts"

const initialState ={
  posts:[],
  status:'idle',
  error:null

}
export const fetchPosts=createAsyncThunk('post/fetchpost',async()=>{


try{
  const response =await axios.get(POSTURL)
  return [...response.data]


}
catch(err){

  return err.message
}

})

    export const  postSlice =createSlice({

        name:"posts",
         initialState ,
         
        reducers:{
            addPost:(state,action)=>{
                state.posts.push(action.payload)
            }
        },
        extraReducers:{

          [fetchPosts.pending]:(state,action)=>{
            state.status='loading'
          },
           [fetchPosts.fulfilled]:(state,action)=>{
             state.posts=action.payload
           },
           [fetchPosts.rejected]:(state,action)=>{
             state.status='failed'
             state.error=action.err.message
           }
        }

    })
    export const {addPost}=postSlice.actions
    export default postSlice.reducer