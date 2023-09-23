import React, { useContext, useState } from "react";

const Context = React.createContext()

export const TodoContext = () => useContext(Context)

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [newTodo, setNewTodo] = useState('');

    const HandleCheck = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };
    const HandleDelete = (id) => {
    
        const targetTodoIndex = todos.findIndex((todo) => todo.id === id);
    
        const newTodos = [...todos];
        newTodos.splice(targetTodoIndex, 1);
        setTodos(newTodos);
    };
    const HandleEdit = (e) => {
        const newTodos = todos.map((todo) =>
            todo.id === editId ? { ...todo, title: e.target.value } : todo
        );
        setTodos(newTodos);
    };

    const HandleCreateTodo = () => {
        if (newTodo.trim() !== '') {
            const newTodos = [
                ...todos,
                {
                    id: todos.length + 1,
                    title: newTodo,
                    completed: false,
                }
            ]
            setTodos(newTodos)
            setNewTodo('')
        }


    }

    const TodoState = {
        HandleEdit,
        HandleDelete,
        HandleCheck,
        todos,
        setTodos,
        editId,
        setEditId,
        newTodo,
        setNewTodo,
        HandleCreateTodo,
    }
    return(
        <Context.Provider
        value={
            TodoState
        }>
            {children}
        </Context.Provider>
    )


}