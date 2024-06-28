import React from "react"
import { useSelector , useDispatch } from "react-redux"
import { fetchTodosAsync } from "./todo/SliceTodo";
export default function App() {

  const todosState = useSelector((state)=>state.todos);
 

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

 
  const { todos, status } = todosState;

  if (status === 'loading') {
    return <div>Loading todos...</div>;
  }
  return (
    <>
  <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
    </>
  )
}
