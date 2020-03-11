import React, {useState} from 'react';
import Item from "./Item";
import ToDoForm from "./ToDoForm";

const ToDo = () =>
{
    const toDoList = 
    [
        {
            text: "Learn Javascript",
            isCompleted: false,
        },
        {
            text: "Learn React",
            isCompleted: false,
        },
        {
            text: "Get rich",
            isCompleted: false
        }
    ];

    const [toDoState, setToDoState] = useState(toDoList);

    const addToDo = (text) =>
    {
        const newToDo = [...toDoState, {text}];
        setToDoState(newToDo);
    }

    const handleItemClick = (index) =>
    {
        const newToDo = [...toDoState];
        newToDo[index].isCompleted = !newToDo[index].isCompleted;
        setToDoState(newToDo);
    }

    const handleRemoveClick = (index) =>
    {
        const newToDo = [...toDoState];
        newToDo.splice(index, 1);
        setToDoState(newToDo);
    }


    return (
        <div className = "ToDo-Container">
            <h1 className = "main-header">To Do List</h1>
            <ToDoForm addToDo = {addToDo}/>
            <div>
                {toDoState.length? 
                (
                    toDoState.map((item, index) =>
                    (
                        <Item
                            key = {`${item.text} - ${index}`}
                            todo = {item}
                            index = {index}
                            handleRemoveClick = {handleRemoveClick}
                            handleItemClick = {handleItemClick}
                        />
                    ))
                ): ""}
            </div>
        </div>
    );
};
export default ToDo;