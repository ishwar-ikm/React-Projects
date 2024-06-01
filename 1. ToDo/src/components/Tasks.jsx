import React from 'react';
import { FaEdit } from "react-icons/fa"; // Importing the FaEdit icon from react-icons/fa
import { MdDelete } from "react-icons/md"; // Importing the MdDelete icon from react-icons/md

export default function Tasks(props) {
    // Function to handle delete action
    const handleDelete = () => {
        props.handleDelete(props.index); // Call handleDelete function passed from parent component
    }

    // Function to handle edit action
    const handleEdit = () => {
        props.handleEdit(props.index); // Call handleEdit function passed from parent component
    }

    // Function to handle completion action
    const handleCompleted = () => {
        props.handleCompleted(props.index); // Call handleCompleted function passed from parent component
    }

    return (
        <div className='tasks'>
            {/* Display todo item with conditional styling */}
            <p onClick={handleCompleted} style={props.isCompleted ? { textDecoration: "line-through" } : null}>
                {props.todo}
            </p>
            {/* Action buttons for delete and edit */}
            <div className="action">
                <button className='btn' onClick={handleDelete}>
                    <MdDelete /> {/* Render delete icon */}
                </button>
                <button className='btn' onClick={handleEdit}>
                    <FaEdit /> {/* Render edit icon */}
                </button>
            </div>
        </div>
    )
}
