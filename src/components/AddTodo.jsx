import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice';
import { nanoid } from '@reduxjs/toolkit';



const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAddBtn = () => {
        dispatch(addTodo({ id: nanoid(), text, completed: false }))
        setText('');
    }

    return (
        <div className="todo-wrapper" >

            <div className="todo-input">

                <div className="todo-input-item">
                    <label>Todo</label>
                    <input
                        type="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="What's the task ?"
                    />
                </div>

                <div className="todo-input-item">
                    <button
                        type="button"
                        onClick={handleAddBtn}
                        className="primaryBtn"
                    >
                        Add
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddTodo