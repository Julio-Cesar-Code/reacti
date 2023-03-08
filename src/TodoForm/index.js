import React from "react";
import { TodoContext } from "../todoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    }=React.useContext(TodoContext)
    const onCancel = () => {
        setOpenModal(false);
    }
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para la ensalada" />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    > Add</button>
            </div>
        </form>
    );
}

export { TodoForm };