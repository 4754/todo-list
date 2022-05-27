import React from "react";

const TodoList = ({ todos, setTodo, setEditTodo }) =>{

    const handleDelete = ({id, title}) => {
        console.log(title);
        setTodo( todos.filter( (item) => item.id !== id) );
    }

    const handleComplete = (todo) => {
        setTodo( todos.map( (item) => {
            if(item.id === todo.id){
                return {...item, completed : !item.completed};
            }
            return item;
        }))
    }

    const handleEdit = ({id}) => {       
        const findTodo = todos.find( (todo) => todo.id === id );
        setEditTodo(findTodo);
    }

  return (
      <div>
          { todos.map( (todo) => (
              <li key = {todo.id} className = "list-item">
                  <input 
                    type = "text"
                    value ={todo.title}
                    className = {`list ${todo.completed ? "completed" : ""}`}
                    onChange = { (e) => e.preventDefault() }
                    />

                    <div className = "button-section">
                        <button className ="button-complete task-button" onClick = { () => handleComplete(todo)}>
                            <i className="fa fa-check-circle">C</i>
                        </button>
                        <button className ="button-edit task-button" onClick = { () => handleEdit(todo) } >
                            <i className="fa fa-edit">E</i>
                        </button>
                        <button className ="button-delete task-button" onClick={ () => handleDelete(todo)} >
                            <i className="fa fa-trash">D</i>
                        </button>
                    </div>

              </li>
          ) )}
      </div>
  )
};

export default TodoList;