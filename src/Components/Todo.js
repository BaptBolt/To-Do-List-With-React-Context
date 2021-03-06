import React, {useContext} from 'react';
import CtxTodo from './CtxTodo';

const Todo = (props) => {

  const [todos, setTodos]= useContext(CtxTodo)

  const handleDelete=()=>{
    let newTodos = [...todos];
    newTodos.splice(props.index, 1)
    setTodos(newTodos)
  }
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.describ}</p>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;