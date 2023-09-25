import Todo from "./components/Todo";
import "./App.css"
import createEffect from "./CreateEffect"
import Tabs from "./components/Tabs"
import { TodoContext } from './Context';

function App() {
    const { setTodos } = TodoContext()
    
    createEffect(setTodos);
    return (
        <div className="App">
            <Todo />
            <Tabs />
        </div>
    );
}

export default App;
