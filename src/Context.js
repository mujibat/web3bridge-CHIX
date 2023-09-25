import React, { useContext, useState } from "react";

const Context = React.createContext()

export const TodoContext = () => useContext(Context)

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [newTodo, setNewTodo] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

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
        if (e.target.value.trim() != "") {
            const newTodos = todos.map((todo) =>
                todo.id === editId ? { ...todo, title: e.target.value } : todo
            );
            setTodos(newTodos);
            setIsEmpty(false);
        } else  {
            setIsEmpty(true);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, [2000])
        }
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
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, [2000])
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
        isEditing,
        setIsEditing,
        error,
        setError,
        isEmpty
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