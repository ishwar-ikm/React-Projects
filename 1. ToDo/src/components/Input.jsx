import React, { useEffect, useState } from 'react';

export default function Input(props) {
    // State to manage the input value
    const [todo, setTodo] = useState("");

    // useEffect to update the input value when the editToDo prop changes
    useEffect(() => {
        setTodo(props.editToDo);
    }, [props.editToDo]);

    // Function to handle changes in the input value
    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    // Function to handle form submission
    const onSubmit = () => {
        props.addTodo(todo); // Call the addTodo function passed from parent component
        setTodo(""); // Clear the input field after submission
    }
    
    return (
        <div className='title'>
            {/* Input field for adding tasks */}
            <input onChange={handleChange} placeholder='Add Task' type="text" value={todo} />
            {/* Button to submit the task */}
            <button onClick={onSubmit} className='btn' type='button'>Save</button><br />
        </div>
    )
}
