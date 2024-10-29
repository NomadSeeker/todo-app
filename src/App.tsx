import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Todo from './pages/Todo';
import CreateTodo from './pages/CreateTodo';
import TodosContextProvider from './store/todo-context';

  

function App() {
  return (
   <>
   <TodosContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<Todo />} />
        <Route path="/newTodo" element={<CreateTodo />} />
      </Routes>
    </Router>
   </TodosContextProvider>
   </>
  );
}

export default App;
