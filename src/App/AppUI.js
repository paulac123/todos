import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { EmpyTodos } from '../EmpyTodos';
import { TodosError } from '../TodosError';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';



function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    
} = React.useContext(TodoContext);
 
return (
    <>
      <TodoCounter/>
      <TodoSearch />

      <TodoContext.Consumer>
      
         <TodoList>
         {loading && (
         <>
         <TodosLoading />
         <TodosLoading />
         <TodosLoading />
         </>
         )}
         {error && <TodosError />}
         {(!loading && searchedTodos.length == 0) && <EmpyTodos />}
         
           {searchedTodos.map(todo => (
             <TodoItem
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
             />
           ))} 
           </TodoList>
      
     
      </TodoContext.Consumer>
      
      <CreateTodoButton />

   {openModal && (
       <Modal>
       La funcionalidad de agregar TODO 
     </Modal>
   )}

      </>
);
}
  


export {AppUI};