import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../todoContext";
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";

function AppUI() {


  const {
          loading,
          error,
          searchedTodos, 
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,

        } = React.useContext(TodoContext);



    return (<React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
       
      
          
          <TodoList>

            {error && <p>Desespera, hubo un error</p>}
            {loading && <p>Estamos cargando, no dessesperes</p>}
            {(!loading && !searchedTodos.length) && <p> Crea tu primer todo</p>}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />))}


          </TodoList>
      {openModal && (
        <Modal>
        <TodoForm/>
        </Modal>
          )}
      


      <CreateTodoButton
        setOpenModal={setOpenModal} />
    </React.Fragment>);
}

export {AppUI}