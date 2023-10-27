import {useState,useEffect} from 'react'
import SectionHeader from './SectionHeader'
import SectionList from './SectionList'
import './style.css'

const Todo = () => {
    
  const[inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([])
  const [statu,setStatu]=useState("All")
  const [filteredTodos, setFilteredTodos] = useState([]);
  const[numberActive,setNumberActive]=useState(0)
  useEffect(()=>{
    getLocalTodos()
  },[])//uygulama çalışınca local storage 1 defa çalıştırılır
  const filterHandler=()=>{
    switch (statu) {
      case "Completed":
        setFilteredTodos(todos.filter((todo)=>todo.completed===true))
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo)=>todo.completed===false))
        break;    
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  useEffect(()=>{
    filterHandler(todos)
    saveLocalTodos()
    activeTodosHandler()
  },[todos,statu])


  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }
  const activeTodosHandler=()=>{
    setNumberActive(todos.filter((todo)=>todo.completed===false).length)
  }
  return (
    <>
      <section className="todoapp">
          <SectionHeader
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          />
          <SectionList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          setStatu={setStatu}
          numberActive={numberActive}
          />
          
      </section>
    </>
  );
}

export default Todo