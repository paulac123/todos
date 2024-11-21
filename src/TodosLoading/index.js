import React from 'react';
import './TodosLoading.css';

function TodosLoading (){

  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon'>
      </span>
      <span>
      <p className='LoadingTodo-text'></p></span>
      <span className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

export { TodosLoading };
