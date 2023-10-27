import React from 'react'

const Todo = ({text,todos,setTodos,todo}) => {
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id))
    }
    const completeHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item,completed:!item.completed
                }
            }
            return item;
        }))
    }
  return (
    <>
        <li className={todo.completed?"completed":""} key={todo.id}>
            <div className='view'>
                <input type="checkbox" className='toggle' onChange={completeHandler}/>
                <label>{text}</label>
                <button className='destroy' onClick={deleteHandler}></button>
            </div>
        </li>
    

    </>
  )
}

export default Todo