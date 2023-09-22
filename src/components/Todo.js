import { useEffect } from 'react'
import { TodoContext } from '../Context';


export default function Todo() {
    const { newTodo, setNewTodo, todos, setTodos, editId, setEditId, HandleClick, HandleDelete, HandleEdit, HandleCreateTodo } = TodoContext()

    useEffect(() => {
        let canceled = false;
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                if (!canceled) {
                    setTodos(data.slice(0, 10));
                }
            })
            .catch((err) => {
                console.error(err);
            });

        return () => (canceled = true);
    }, []);
    <div className="todo-wrapper">
        <input type='text' placeholder='create new entry' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={HandleCreateTodo}>create</button>
    <ul>
        {!!todos.length &&
            todos.map((todo) => (
                <li className="todo" key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => HandleClick(todo.id)}
                    />
                    {editId === todo.id ? (
                        <input
                            type="text"
                            value={todo.title}
                            onChange={HandleEdit}
                        />
                    ) : (
                        <span
                            className={`todo-title ${
                                todo.completed && "checked"
                            }`}
                        >
                            {todo.title}
                        </span>
                    )}
                    {editId === todo.id ? (
                        <button onClick={() => setEditId(null)}>
                            ✅
                        </button>
                    ) : (
                        <button
                            className="del-button"
                            onClick={() => setEditId(todo.id)}
                            disabled={todo.completed}
                        >
                            ✏️
                        </button>
                    )}
                    <button
                        className="del-button"
                        onClick={() => HandleDelete(todo.id)}
                    >
                        🗑️
                    </button>
                </li>
            ))}
    </ul>
    </div>
}