import './App.css';
import Addtodo from './components/Addtodo';
import Todocount from './components/Todocount';
import Todolist from './components/Todolist';
import { useState } from 'react'

function App() {
  //State
  const [todos, setTodos] = useState([])

  const onFormSubmit = (todoObj) => {
    console.log(todoObj)
    setTodos([...todos, todoObj.todo])
  }


  return (
    <div className="container mt-4 text-center ">
      <h1 className='display-3 p-3'>BASIC TODO APPLICATION</h1>
      <div className="row text-center pt-4">
        <div className="col-sm-4">
          <Addtodo onFormSubmit={onFormSubmit} />
        </div>
        <div className="col-sm-4">
          <Todolist todos={todos} />
        </div>
        <div className="col-sm-4">
          <Todocount todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
