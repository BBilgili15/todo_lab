import './App.css';
import {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name: 'Buy Shopping', highPriority: true},
    {id: 2, name: 'Clean Bathroom', highPriority: false},
    {id: 3, name: 'Car MOT', highPriority: true}
  ])

  const [newTodo, setNewTodo] = useState("")
  // const [newState, ]
  const newTodoPriority = "false"
  // Need a use state for dropdown/radio button - try and work out how

  const completeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => {return todo.id !== todoId})
    setTodos(newTodos)
  }

  const todoItems = todos.map((todo) => {
    return (
      <li class={todo.highPriority ? "high-priority" : "low-priority"} key={todo.id}>
        {todo.name}
        <button className='complete-button' onClick={() => completeTodo(todo.id)}>Mark Done</button>
      </li>
    )
  })

  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }

  // not currently enough to set priority
  const handleDropdownInput = (event) => {
    const newTodoPriority = event.target.value
    return newTodoPriority
  }

  const saveNewTodo = (event) => {
    event.preventDefault()

    const newTodoObj = {id: Date.now(), name: newTodo, highPriority: newTodoPriority} // use the above notes to add this
    const nextTodo = [...todos, newTodoObj]
    setTodos(nextTodo)

    setNewTodo('')
  }

  return (
    <div className="App">
      <h2>ToDo List</h2>
      <form onSubmit={saveNewTodo}>
        <label htmlFor='new-todo'>Add New ToDo: </label>
        <input id='new-todo' type='text' placeholder='New ToDo...' value={newTodo} onChange={handleTodoInput}></input>
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
