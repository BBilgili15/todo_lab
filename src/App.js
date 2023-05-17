import './App.css';
import {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name: 'Buy Shopping', highPriority: true},
    {id: 2, name: 'Clean Bathroom', highPriority: false},
    {id: 3, name: 'Car MOT', highPriority: true}
  ])
 
  // Use state ---------------------------------------------
  const [newTodo, setNewTodo] = useState("")
  const [newPriority, setNewPriority] = useState('')


  // Handle Input Functions ----------------------------------------------
  const handleDropdownInput = (event) => {
    setNewPriority(event.target.value)
  }

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }

  // Other Functions --------------------------------------------------------------
  const completeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => {return todo.id !== todoId})
    setTodos(newTodos)
  }

  const saveNewTodo = (event) => {
    event.preventDefault()

    const newTodoObj = {id: Date.now(), name: newTodo, highPriority: newPriority}
    const nextTodo = [...todos, newTodoObj]
    setTodos(nextTodo)

    setNewTodo('')
  }

const todoItems = todos.map((todo) => {
  return (
    <li className={todo.highPriority ? "high-priority" : "low-priority"} key={todo.id}>
      {todo.name}
      <button className='complete-button' onClick={() => completeTodo(todo.id)}>Mark Done</button>
    </li>
  )
})

  // Return JSX
  return (
    <div className="App">
      <h2>ToDo List</h2>
      <form onSubmit={saveNewTodo}>
        <label htmlFor='new-todo'>Add New ToDo: </label>
        <input id='new-todo' type='text' placeholder='New ToDo...' value={newTodo} onChange={handleTodoInput}></input>
        <label id='priority' htmlFor='priority-level'>Mark Priority: </label>
        <select onChange={handleDropdownInput}>
          <option value='true'>Low</option>
          <option value='false'>High</option>
          {/* ASK FOR HELP HERE - true/false doesn't seem to correspond */}
        </select>
        <input type='submit' value='Save'></input>
      </form>
      <ul>
        {todoItems}
      </ul>
    </div>
  );
}

export default App;
