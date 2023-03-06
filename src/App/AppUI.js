import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../todoContext";

function AppUI() {
    return (<React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
       
      <TodoContext>
        {({
          loading,
          error,
          searchedTodos, 
          completeTodos,
          deleteTodo,

        }) => (
          
          <TodoList>

            {error && <p>Desespera, hubo un error</p>}
            {loading && <p>Estamos cargando, no dessesperes</p>}
            {(!loading && !searchedTodos.length) && <p> Crea tu primer todo</p>}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />))}


          </TodoList>

        )}
      </TodoContext>


      <CreateTodoButton/>
    </React.Fragment>);
}

export {AppUI}