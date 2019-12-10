import React,{useState} from 'react';
import './App.css';
import Todos from './Components/Todos';
import FormToDo from './Components/FormToDo';
import CtxTodo from './Components/CtxTodo'

function App() {
  const [todos, setTodos]=useState([])
  return (
    <div className="App">
      <header className="container p-3">
        <h1 className="title">My Personal To Do List</h1>
        <CtxTodo.Provider value={[todos,setTodos]}>
       <Todos/>
       <FormToDo/>
       </CtxTodo.Provider>
      </header>
    </div>
  );
}

export default App;
