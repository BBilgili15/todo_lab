import './App.css';
import {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([
    // {id: 1, name: 'Buy Shopping', highPriority: true},
    // {id: 2, name: 'Clean Bathroom', highPriority: false},
    // {id: 3, name: 'Car MOT', highPriority: true}
  ])
 
  // Use state ---------------------------------------------
  const [newTodoName, setNewTodo] = useState("")
  const [newPriority, setNewPriority] = useState('false')


  // Handle Input Functions ----------------------------------------------
  const handleDropdownInput = (event) => {
    console.log(event.target.value)
    let newPriority = false
    if (event.target.value == 'true') {
      newPriority = true
    }
    setNewPriority(newPriority) // update the state of the new todo priority to what is being passed
  }

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value) // update the state of the new todo name to what is being passed
  }

  // Other Functions --------------------------------------------------------------
  const completeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => {return todo.id !== todoId})
    setTodos(newTodos)
  }

  const saveNewTodo = (event) => {
    event.preventDefault()

    const newTodoObj = {id: Date.now(), name: newTodoName, highPriority: newPriority}
    const nextTodo = [...todos, newTodoObj]
    setTodos(nextTodo) // update the state of all todos to what we're passing

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
        <input id='new-todo' type='text' placeholder='New ToDo...' value={newTodoName} onChange={handleTodoInput}></input>
        <label id='priority' htmlFor='priority-level'>Mark Priority: </label>
        <select onChange={handleDropdownInput}>
          <option value='true'>High</option>
          <option value='false'>Low</option>
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
