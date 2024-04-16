import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem';


const TodoList = () => {
    const { todos } = useSelector((state) => state.todolist);

    console.log("My todo" , todos);

    return (
        <>
            {
                todos.length > 0 ? <div className="todo-list">

                    {
                        todos?.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo} />
                        })
                    }
                </div> : <h2 style={{ textAlign: 'center', marginTop: '25px' }}>No todos....</h2>
            }

        </>

    )
}

export default TodoList