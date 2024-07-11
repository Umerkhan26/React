import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodeItems from "./component/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to Collage",
      dueDate: "4/10/2023",
    },
    {
      name: "Follow Me",
      dueDate: "14/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodeItems todoItems={todoItems}></TodeItems>
    </center>
  );
}

export default App;
