import {createSlice} from '@reduxjs/toolkit'
import { getTodosAsync,addTodoAsync,toggleTodoAsync,removeTodoAysnc, clearCompletedTodosAsync } from './services'
export const todosSlice=createSlice({
    name:"todos",
    initialState:{
        items:[],
        isLoading:false,
        error:null,
        activeFilter:localStorage.getItem('activeFilter')||'all',
        addNewTodo:{
            isLoading:false,
            error:false
        }
    },
    reducers:{
        // addTodo:{
        //     reducer:(state,action)=>{
        //         state.items.push(action.payload)
        //     },
        //     prepare:({title})=>{
        //         return {
        //             payload:{
        //                 id:nanoid(),
        //                 completed:false,
        //                 title
        //             }
        //         }
        //     },
        // },
        // toggle:(state,action)=>{
        //     const {id}=action.payload;
        //     const item= state.items.find(item=>item.id === id)
        //     item.completed = !item.completed
        // },
        // destroy:(state,action)=>{
        //     const id =action.payload;
        //     const filtered = state.items.filter(item => item.id !== id)
        //     state.items=filtered
        // },
        changeActiveFilter:(state,action)=>{
            state.activeFilter=action.payload
        },
        clearCompleted:(state,action)=>{
            const filtered=state.items.filter(item => item.completed===false)
            state.items=filtered
        }
    },
    extraReducers:(builder)=>{
        // get todo 
        builder.addCase(getTodosAsync.pending, (state,action)=>{
            state.isLoading=true;
        })

        builder.addCase(getTodosAsync.fulfilled,(state,action)=>{
            state.items=action.payload
            state.isLoading=false
        })

        builder.addCase(getTodosAsync.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message 
        })

        // add todo
        builder.addCase(addTodoAsync.pending,(state,action)=>{
            state.addNewTodo.isLoading=true
        })

        builder.addCase(addTodoAsync.fulfilled,(state,action)=>{
            state.items.push(action.payload)
            state.addNewTodo.isLoading=false
        })

        builder.addCase(addTodoAsync.rejected,(state,action)=>{
            state.addNewTodo.error=action.error.message
            state.addNewTodo.isLoading=false
        })

        // toggle todo
        builder.addCase(toggleTodoAsync.fulfilled,(state,action)=>{
            const {id,completed}=action.payload;
            const index= state.items.findIndex(item=>item.id === id)
            state.items[index].completed=completed;  
        })

        //remove todo
        builder.addCase(removeTodoAysnc.fulfilled,(state,action)=>{
            const id=action.payload
            // const filtered = state.items.filter(item => item.id !== id)
            // state.items=filtered
            const index =state.items.findIndex(item=>item.id === id)
            state.items.splice(index,1)
        })

        //clearCompleted Todos
        builder.addCase(clearCompletedTodosAsync.fulfilled,(state,action)=>{
            state.items=action.payload;
        })
    }
    // extraReducers eski versiyonu
    // extraReducers:{
    //     [getTodosAsync.pending]:(state,action)=>{
    //         state.isLoading=true;
    //     },
    //     [getTodosAsync.fulfilled]:(state,action)=>{
    //         state.items=action.payload
    //         state.isLoading=false
    //     },
    //     [getTodosAsync.rejected]:(state,action)=>{
    //         state.isLoading=false;
    //         state.error=action.error.message
    //     }
    // }
})

//Her componentte ayrı ayrı  const items=useSelector(state=> state.todos.items) şeklinde itemsları almaktansa bu şekilde export ederek componentte const items=useSelector(selectTodos) şeklinde kullanırız
export const selectTodos=(state)=>state.todos.items;

// TodoList componentinde yapılan filtreleme işlemini burda yaparak gerektiği zaman başka componentlerde kullanmak üzere export edebiliriz
export const selectFilteredTodos = (state) => {
    if(state.todos.activeFilter === 'all'){
        return state.todos.items
    }

    return state.todos.items.filter((todo)=>
        state.todos.activeFilter === 'active' ? todo.completed === false : todo.completed === true
    )

}
export const selectActiveFilter = (state)=> state.todos.activeFilter;

export const {addTodo,toggle,destroy,changeActiveFilter,clearCompleted} = todosSlice.actions
export default todosSlice.reducer;
