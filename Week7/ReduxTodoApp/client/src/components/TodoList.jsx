import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { destroy, toggle,selectTodos,selectFilteredTodos} from '../redux/todos/todosSlice'
import { getTodosAsync,addTodoAsync,toggleTodoAsync,removeTodoAysnc } from '../redux/todos/services'
import Loading from './Loading'
import Error from './Error'

const TodoList = () => {
    const dispatch =useDispatch()
    //const items =  useSelector(selectTodos)  //useSelector(state=>state.todos.items)
    // selectFilteredTodos ile bunlara ihtiyaç kalmadı
    //const activeFilter =useSelector((state)=>state.todos.activeFilter)
    const filteredTodos = useSelector(selectFilteredTodos)
    const isLoading = useSelector((state)=>state.todos.isLoading)
    const error =useSelector((state)=>state.todos.error)

    const handleDestroy=async(id) => {
        if(window.confirm("Are you sure ?")){
            //dispatch(destroy(id))
            await dispatch(removeTodoAysnc(id))
        }
    }
    
    useEffect(()=>{
        dispatch(getTodosAsync())
    },[])

    // let filtered=items;
    // if(activeFilter !== 'all'){
    //     filtered=items.filter((todo)=>  
    //                 activeFilter==='active' 
    //                 ? todo.completed === false 
    //                 : todo.completed === true 
    //     )
    // }

    const handleToggle= async(id,completed)=>{
        await dispatch(toggleTodoAsync({id,data:{completed}}))
    }

    if(isLoading){
        return <Loading/>
    }
    if(error){
        return <Error message={error}/>
    }
  return (
    <ul className="todo-list">
    {
        filteredTodos?.map((item)=>(
            <li key={item.id} className={item.completed ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" 
                           type="checkbox"
                           checked={item.completed} 
                           //onChange={() => dispatch(toggle({ id: item.id }))}
                           onChange={()=>handleToggle(item.id, !item.completed)}
                    />
                    <label>{item.title}</label>
                    <button className="destroy" onClick={()=>handleDestroy(item.id)}></button>
                </div>
            </li>
        ))
    }
	</ul>
  )
}

export default TodoList