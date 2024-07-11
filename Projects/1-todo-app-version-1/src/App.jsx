import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem1 from "./component/TodeItem1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";

function App() {

  return (
    <center className= 'todo-container'>
      <AppName/>
      <AddTodo/>
      <div className="items-container">
      <TodoItem1/>
      <TodoItem2/>
      </div>
      
    </center>
  )
}

export default App
