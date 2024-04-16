const { createSlice } = require("@reduxjs/toolkit");

const loadTodos = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveTodos = (todos) => {
  try {
    const serializedState = JSON.stringify(todos);
    localStorage.setItem("todos", serializedState);
  } catch (err) {
    console.log("Save todos", err);
  }
};

const todoSlice = createSlice({
  name: "Todos",

  initialState: {
    todos: loadTodos(),
  },

  reducers: {
    addTodo: (state, action) => {
      try {
        state.todos = [...state.todos, action.payload];
        saveTodos(state.todos);
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodos(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const updateTodo = state.todos.find((todo) => todo.id === id);
      if (updateTodo) {
        updateTodo.text = text;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state.todos);
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
