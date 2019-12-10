import React, {useContext} from 'react';
import Todo from './Todo';
import CtxTodo from './CtxTodo';
import { tsObjectKeyword } from '@babel/types';

function Todos (){

  const [todos, setTodos]= useContext(CtxTodo)
  console.log(todos)
  return(
    <div>
      {todos.map((todo,index) =>{
        return(<Todo key={index} title={todo.title} describ={todo.describ} index={index}/>)
      })}
    </div>
  )
}

export default Todos;