
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../todoContext';
// import './App.css';

// const defaulttodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: true},
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];


function App() {
 

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;