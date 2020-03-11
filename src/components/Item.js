import React from 'react';

const Item = ( {todo, index, handleRemoveClick, handleItemClick} ) => 
(
    <div className = 'todo'>
        <span className = {todo.isCompleted ? 'strike-through' : ''}
        onClick = {() => handleItemClick(index)}>{todo.text}</span>
        <button class = 'remove-item-cross' onClick = {() => handleRemoveClick(index)}>Delete</button> 
    </div>
);
export default Item;