// import createEffect from "./CreateEffect"
import { useEffect, useMemo, useState } from "react";
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

export function AllTodos() {
  const { todos } = TodoContext();
//   const [completed, setCompleted] = useState([]);
//   const [incomplete, setIncomplete] = useState([]);
  const completed = useMemo(() => todos.filter((todo) => todo.completed), [todos])
  const incomplete = useMemo(() => todos.filter((todo) => !todo.completed), [todos])
  const [tab, setTab] = useState('all'); // all, completed, incomplete
//   const HandleShowAll = () => { 
//     setShowAll((prev) => !prev)
// }

//   <TodoComponent items= {tab == "all" ? todos : tab == "completed" ? completed : incomplete}/> 

//   useEffect(() => {
//     setCompleted(todos.filter((todo) => todo.completed === true));
//   }, [todos]);
return (
    <>
    <div>
        <h2 onClick={() => completed}>All Todos</h2>
        {/* create a div that shows all todos
        {
            showAll && < AllTodos/>
        } */}
    </div>
    <div>
        <h2 onClick={() => incomplete()}>Completed Todos</h2>
        {/* {
            showAllCompleted && <completed />
        } */}
    </div>
    <div>
        <h2 onClick={() => incomplete()}>uncompleted</h2>
        {/* {
            showAll && <incomplete />
        } */}
    </div>
    </>
)
//   return (
//     <div>
//       {completed.map((todo) => {
//         console.log(todo, "this is the todo object");
//         return <div>{todo.title}</div>;
//       })}
//     </div>
//   );
}
// function HandleCompleted() {
//     const { todos } = TodoContext();
//     console.log(todos);
//     console.log(todos.filter(todo => todos.completed === true))
//           // console.log(todo.completed, "completed")
//         // return (<div>{todos.completed}</div>)
//     return(<div>
//    <h1>hey</h1>

//     </div>)
// }

// export default function All() {
//     const [showAll, setShowAll] = useState(false)
//     const [showAllCompleted, setShowAllCompleted] = useState(false)
//     const HandleShowAllCompleted = () => {
//         setShowAllCompleted((prev) => !prev)
//     }
//     const HandleShowAll = () => {
//         setShowAll((prev) => !prev)
//     }
//     return (
//         <>
//         <div>
//             <h2 onClick={() => HandleShowAll()}>All Todos</h2>
//             {/* create a div that shows all todos */}
//             {
//                 showAll && < AllTodos/>
//             }
//         </div>
//         <div>
//             <h2 onClick={() => HandleShowAllCompleted()}>Completed Todos</h2>
//             {
//                 showAllCompleted && <HandleCompleted />
//             }
//         </div>
//         <div>
//             <h2 onClick={HandleShowAll}>uncompleted</h2>
//         </div>
//         </>
//     )
// }
