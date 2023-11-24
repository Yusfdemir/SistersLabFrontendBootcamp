import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
//import { addTodo} from '../redux/todos/todosSlice'
import { addTodoAsync } from '../redux/todos/services'
import Loading from './Loading'
import Error from './Error'
//import { nanoid } from 'nanoid'

const Form = () => {
  const [title,setTitle]=useState('');
  const dispatch=useDispatch();
  const isLoading=useSelector(state=>state.todos.addNewTodo.isLoading)
  const error=useSelector(state=>state.todos.addNewTodo.error)
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if (!title) return;
    //dispatch(addTodo({id:nanoid(),title,completed:false})) todosSlice içinde prepare kullanmazsak bu şekilde
    await dispatch(addTodoAsync({title}))
    setTitle('')
  }

  

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',alignItems:'center',}}>
        <input  className='new-todo'
                disabled={isLoading} 
                placeholder='What needs to be done' 
                autoFocus 
                value={title}  
                onChange={(e)=> setTitle(e.target.value)}
        />
        { isLoading && <Loading/>}
        { error && <Error message={error}/>}
    </form>
  )
}

export default Form