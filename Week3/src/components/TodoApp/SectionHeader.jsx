import React from 'react'

const SectionHeader = ({inputText,setInputText,todos,setTodos}) => {
    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
      e.preventDefault();
      if(inputText.trim().length>0){
       setTodos([...todos,{text:inputText ,completed:false,id:Math.random()}]) 
      }
      
      setInputText("")
    }
      return (
        <>
        <header className='header'>
          <h1>todos</h1>
          <form onSubmit={submitTodoHandler}>
            <input value={inputText} className='new-todo' placeholder='What needs to be done' autoFocus onChange={inputTextHandler} />
          </form>
        </header>   
      </>  
      )
}

export default SectionHeader