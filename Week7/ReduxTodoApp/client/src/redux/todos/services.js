import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const getTodosAsync=createAsyncThunk('todos/getTodosAsync', async ()=>{
    const res=await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`)
    return await res.json()
})
export const addTodoAsync=createAsyncThunk('todos/addTodoAsync', async (data)=>{
    const res= await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,data)
    return  res.data
})
export const toggleTodoAsync=createAsyncThunk('todos/toggleTodoAsync',async({id,data})=>{
    const res= await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`,data)
    return res.data;
})

export const removeTodoAysnc=createAsyncThunk('todos/removeTodoAysnc',async(id)=>{
    await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`)
    return id;
})

export const clearCompletedTodosAsync=createAsyncThunk('todos/clearCompletedTodosAsync',async()=>{
    const res=await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/clear`)
    return res.data
})