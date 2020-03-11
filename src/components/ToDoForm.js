import React, { useState } from "react";

const ToDoForm = ({addToDo}) =>
{
    const [valueState, setValueState] = useState("");

    const onFormSubmit = (event) =>
    {
        event.preventDefault();
        if (!valueState) return;
        addToDo(valueState);
    }

    const handleOnChange = (event) =>
    {
        setValueState(event.target.value);
    }
    return (
        <form onSubmit = {onFormSubmit}>
            <label className = "form-label">
                Add To Do
                <input
                    type = "text"
                    className = "form-input"
                    value = {valueState}
                    onChange = {handleOnChange}
                />
            </label>
        </form>
    );
}
export default ToDoForm;