import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'



export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos',async ()=>{
    const response = await fetch('http://localhost:5000/api/todos');
    if(!response.ok){
        throw new Error('Failed to fetch the todos.');
    }
    const todos = await response.json();
    return todos;
})
const initialState = {
    todos:[],
    status:'idle',
    error:null,
}

 const todoReducer = createSlice({
     name:"todos",
     initialState,
     reducers:{},
     extraReducers:(builder)=>{
        builder
          .addCase(fetchTodosAsync.pending, (state)=>{
            state.status="loading"
          })
          .addCase(fetchTodosAsync.fulfilled, (state,action)=>{
            state.status="succeeded";
            state.todos = action.payload;
          })
          .addCase(fetchTodosAsync.rejected, (state,action)=>{
            state.status="failed";
            state.error= action.error.message;
          })
     }

});

export default todoReducer.reducer