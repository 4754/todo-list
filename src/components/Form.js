import React, {useEffect} from "react";
import {v4 as uuidV4} from "uuid";

const Form = ({ input, setInput, todos, setTodo, editTodo, setEditTodo }) => {


    const updateTodo = (title,id,completed) =>{
        const newTodo = todos.map( (todo) => 
            todo.id === id ?  { title, id, completed} :  todo
         );
        setTodo(newTodo);
        setEditTodo("");
    }

    useEffect( () =>{
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    },[setInput, editTodo] );

    const onChangeHandler = (event) =>{
        setInput(event.target.value);
        //console.log(event.target.value);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        if(!editTodo) {
           setTodo([...todos, { id : uuidV4(), title : input, completed : false }]);
           console.log([...todos, { id : uuidV4(), title : input, completed : false }]);
           setInput("");
        } else {
            updateTodo(input, editTodo.id,editTodo.completed);
        }

    }

    return(
        <form onSubmit = {onSubmitHandler} >
            <input 
            type = "text"
            placeholder="Enter a todo..." 
            className = "task-input"
            onChange = {onChangeHandler}
            value = {input}
            required
            />
            <button className="button-add" type = "submit">
                {editTodo ? "OK" : "Add"}
            </button>
        </form>
    )
};

export default Form;