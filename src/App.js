import { useState } from 'react';
import './App.css';
import styles from './App.module.css' 
import { data, generateId } from './data';

function App() {
  const [todos, setTodos] = useState(data)
  const [value, setValue] = useState({id: '', title: '', isComplete: false})

  const result = todos.map((todo) => {
    return <p key={todo.id} >{todo.title} 
    <button onClick={() => removeTodo(todo.id)}>Remove</button>
    <button className={`${todo.isComplete ? styles.btnComplete : styles.btnIncomplete}`} 
    onClick={() => completeTodo(todo.id)}>{todo.isComplete ? 'completed' : 'incomplete'}</button>
    </p>
  })

  function changeHandler(text, name) {
    setValue({id: generateId(), [name]: text, isComplete: false})
  }

  function addTodo() {
    setTodos([...todos, value])
    setValue({id: '', title: '', isComplete: false})
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function completeTodo(id) {
    setTodos(todos.map((todo) => {
      return todo.id === id
      ? {...todo, isComplete: !todo.isComplete}
      : {...todo}
    }))
  }

  return (
    <div className="App">
      <br />
      <input type="text" value={value.title} onChange={(e) => changeHandler(e.target.value, 'title')} /> <button onClick={addTodo}>Add todo</button>
      <br />
      <br />
      <hr />
      <br />
      {result}
    </div>
  );
}

export default App;
