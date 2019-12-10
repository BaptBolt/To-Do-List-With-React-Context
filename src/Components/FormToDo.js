import React,{useState, useContext} from 'react';
import CtxTodo from './CtxTodo';

const FormToDo = () => {
  const [todos, setTodos]=useContext(CtxTodo);
  const[form, setForm]=useState({
    title: '',
    describ:'',
  })

  const addToDo=()=>{
    setTodos([...todos, form]);
    setForm({
      title: '',
      describ:'',
    })
  }
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="Title">Title</label>
          <input 
          type="text" 
          className="form-control" 
          id="Title" 
          aria-describedby="emailHelp" 
          placeholder="Title" 
          value={form.title}
          onChange={(event)=> setForm({...form, title: event.target.value})}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
          type="text" 
          className="form-control" 
          id="description" 
          placeholder="Descibe" 
          value={form.describ}
          onChange={(event)=> setForm({...form, describ: event.target.value})}
          />
        </div>
        <button className="btn btn-primary" onClick={addToDo}>Add ToDo</button>
      </div>
    </div>
  )
}

export default FormToDo;