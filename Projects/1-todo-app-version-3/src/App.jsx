import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodeItems from "./component/TodoItems";
import "./App.css";
// import { useReducer } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
// import { TodeItemscontext } from "./store/todo-items-store";
import TodeItemsContextProvider from "./store/todo-items-store";

function App() {
  // const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodeItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo /*onNewItem={handleNewItem}*/ />
        {/* {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>} */}
        <WelcomeMessage /*todoItems={todoItems}*/></WelcomeMessage>
        <TodeItems
        // todoItems={todoItems}
        // onDeleteClick={handleDeleteButton}
        ></TodeItems>
      </center>
    </TodeItemsContextProvider>
  );
}

export default App;
