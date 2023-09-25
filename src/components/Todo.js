import { TodoContext } from '../Context';

export default function Todo() {
    const { isEmpty, error, newTodo, setNewTodo, todos, editId, setEditId, HandleCheck, HandleDelete, HandleEdit, HandleCreateTodo, setIsEditing, isEditing } = TodoContext()

 
    return (<div className="todo-wrapper">
    <input type='text' placeholder='create new entry' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
    <button onClick={HandleCreateTodo}>create</button>
    {error && <p>There is an error</p>}
<ul>
    {!!todos?.length &&
        todos.map((todo) => (
            <li className="todo" key={todo.id}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => !isEditing && HandleCheck(todo.id)}
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
                    <button disabled={isEmpty} onClick={() => {
                        setEditId(null);
                        setIsEditing(false);
                    }}>
                        ✅
                    </button>
                ) : (
                    <button
                        className="del-button"
                        onClick={() => {
                            setEditId(todo.id);
                            setIsEditing(true);
                        }}
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
</div>)
}