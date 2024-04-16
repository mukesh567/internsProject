import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo, toggleTodo } from '../store/todoSlice';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';


const TodoItem = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.text);
    const dispatch = useDispatch();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id));
    }

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleUpdateTodo = () => {
        dispatch(updateTodo({ id: todo.id, text }));
        setEditing(false);
    }

    return (
        <div >
            <div className={`todo`} >
                {
                    editing ?
                        <>


                            <div className='edit__wrapper'>
                                <input
                                    placeholder='Updated Todo'
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />

                                <button
                                    type="button"
                                    onClick={handleUpdateTodo}
                                    className="primaryBtn"
                                >
                                    Update
                                </button>
                            </div>
                        </>
                        :
                        <>

                            <div className="todo-list-item" >
                                <div
                                className='text'
                                    onClick={() => handleToggle()}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none',cursor:'pointer' }}
                                >
                                    <h3>{todo.text}</h3>
                                </div>

                            </div>
                            <div>
                                <AiOutlineEdit className="check-icon"
                                    onClick={() => setEditing(true)}
                                    title="Edit?" 
                                    style={{cursor:'pointer'}}
                                    />
                                <AiOutlineDelete
                                    className="icon"
                                    onClick={handleDeleteTodo}
                                    title="Delete?"
                                />
                            </div>

                        </>

                }


            </div>
        </div >
    )
}

export default TodoItem