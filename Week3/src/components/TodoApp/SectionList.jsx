import React from 'react'
import ToDo from './Todo'
const SectionList = ({todos,setTodos,filteredTodos,setStatu,numberActive}) => {
    return (
        <>
        <section className='main'>
            <input type="checkbox" className='toggle-all' />
            <label htmlFor="toggle-all" >Mark all as complete</label>
    
            <ul className='todo-list'>
                
                {
                    filteredTodos.map((todo)=>(
                      <ToDo 
                      text={todo.text}
                      key={todo.id}
                      todos={todos}
                      todo={todo}
                      setTodos={setTodos}
                      />  
                    ))
                }  
            </ul>
        </section>
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{numberActive}</strong>item left
            </span>
            <ul className='filters'>
                <li><button onClick={(e)=>{setStatu(e.target.textContent)}}>All</button></li>
                <li><button onClick={(e)=>{setStatu(e.target.textContent)}}>Active</button></li>
                <li><button onClick={(e)=>{setStatu(e.target.textContent)}}>Completed</button></li>
            </ul>
            <button className='clear-completed' onClick={(e)=>{setTodos(todos.filter((todo)=>todo.completed===false))}}>Clear Completed</button>
        </footer>
        </>
    
    
      )
}

export default SectionList