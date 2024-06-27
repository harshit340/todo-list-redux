import {createSlice,nanoid} from '@reduxjs/toolkit'

// creating initial state

const initialState = {
    todos:[{id:1,text:"hy i am harshit"}]
}

export const todoSlice = createSlice({
     name:"todo",
     initialState,
     reducers:{
        // it contain property and function

        addTodo:(state,action)=>{  
           // creating new entry
           const todo = {
            id:nanoid(),
            text:action.payload,
           }
           state.todos.push(todo)
        },
        removetodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }

     }

});

export const {addTodo,removetodo} = todoSlice.actions
export default todoSlice.reducer