import React from "react"
import { useSelector , useDispatch } from "react-redux"
import {removetodo , addTodo} from './todo/SliceTodo'
export default function App() {

  const todos = useSelector(state=>state.todo.todos);

  const dispatch = useDispatch();

  const [input , setInput] = React.useState('');

  const addtohandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }
  
  return (
    <>
    <div>
      <div style={{ display:"flex" , justifyContent:"center"}}><span style={{fontSize:"30px", marginTop:"30px"}}>Enter your task</span></div>
      <form onSubmit={addtohandler} style={{marginTop:"100px", display:"flex" , justifyContent:"center"}} >
        <input style={{padding:"10px",borderRadius:"0.5rem",width:"20%",marginRight:"10px"}} type="text" placeholder='Enter a todo...' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button style={{padding:"10px" , borderRadius:"1rem" ,backgroundColor:"#5685f5"}} type="submit"><span style={{fontSize:"20px",color:"white"}}>submit</span></button>
      </form>
      <div>
        {todos.map((todo)=>(
            <li style={{ display:"flex" , justifyContent:"center" , alignContent:"space-between" , marginRight:"10px" ,  marginTop:"5px"}}key={todo.id}><span style={{fontSize:"20px"}}>{todo.text}</span>
            <button style={{marginLeft:"20px" , backgroundColor:"red" , border:"1px solid black", borderRadius:"2rem", width:"6%" , height:"25px"}} onClick={()=>dispatch(removetodo(todo.id))}><span style={{color:"white"}}>Delete</span></button>
            </li>
        ))}
      </div>
    </div>
    </>
  )
}
