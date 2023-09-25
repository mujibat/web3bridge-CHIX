// import createEffect from "./CreateEffect"
import { useState } from "react";
import { TodoContext } from "../Context";
// import Todo from "./Todo"
/*
Make the page compose of 3 tabs (namely: All, Completed, Uncompleted)
The “All” tab should contain all the todos unfiltered.
The “Completed” tab should only contain tasks that are completed.
The “Uncompleted” tab should only contain tasks that are not completed.
If a tab contains no todo, render an informative text instead
You should not be able to check a todo when it is currently being edited
Once a completed todo is edited, it should become uncompleted once again
When editing a todo, you should not be able to submit an empty string
Deploy to either vercel,  or netlify, or any hosting platform of your choice
  const HandleCheck = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };
*/

/*********This is a component that returns all the todos*****/
export function AllTodos() {
  const { todos } = TodoContext();

  return (
    <div>
      {todos.map((todo) => {
        console.log(todo, "this is the todo object");
        return <div>{todo.title}</div>;
      })}
    </div>
  );
}


/*********The all todos component ends here*****/
function CompletedTab() {
    const { todos } = TodoContext();
  
    const completedTodos = todos.filter((todo) => todo.completed);
  
    return (
      <div>
        {completedTodos.length === 0 ? (
          <p>No completed todos to display.</p>
        ) : (
          completedTodos.map((todo) => (
            <div key={todo.id}>{todo.title}</div>
          ))
        )}
      </div>
    );
  }
  function InCompletedTab() {
    const { todos } = TodoContext();
  
    const inCompletedTodos = todos.filter((todo) => !todo.completed);
  
    return (
      <div>
        {inCompletedTodos.length === 0 ? (
          <p>All todos completed.</p>
        ) : (
          inCompletedTodos.map((todo) => (
            <div key={todo.id}>{todo.title}</div>
          ))
        )}
      </div>
    );
  }

export default function Tabs() {
    const [showAll, setShowAll] = useState(false)
    const [showCompleted, setShowAllCompleted] = useState(false)
    const [showInCompleted, setShowAllInCompleted] = useState(false)

    const HandleShowAll = () => {
        setShowAll((prev) => !prev)
    }
    const HandleShowCompleted = () => {
        setShowAllCompleted((prev) => !prev)
    }
    const HandleShowInCompleted = () => {
        setShowAllInCompleted((prev) => !prev)
    }

    return (
        <>
        {/*********This div handles all the todos*****/}
        <div>
            <h2 onClick={() => HandleShowAll()}>All Todos</h2>
            {
                showAll && < AllTodos/>
            }
        </div>
        {/*********End of the div that handles all the todos*****/}
        <div>
            <h2 onClick={() => HandleShowCompleted()}>Completed Todos</h2>
            {
                showCompleted && <CompletedTab/>
            }
        </div>
        <div>
            <h2 onClick={HandleShowInCompleted}>uncompleted</h2>
            {
                showInCompleted && <InCompletedTab/>
            }
        </div>
        </>
    )
}

