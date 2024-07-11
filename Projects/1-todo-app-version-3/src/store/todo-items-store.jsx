import { createContext } from "react";
import { useReducer } from "react";
import PropTypes from "prop-types";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodeItemsContextProvider = ({ children }) => {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to Collage",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Follow Me",
  //     dueDate: "14/10/2023",
  //   },
  // ];

  // const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // console.log(`New Items Added: ${itemName} Date: ${itemDueDate}`);

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);

    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // setTodoItems(newTodoItems);

    /* setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    }); */
    // We use this "Funtional Updates" to avoid stale during asynchronous updates
  };

  const deleteItem = (todoItemName) => {
    // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

TodeItemsContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TodeItemsContextProvider;

// CONTEXT API = Context API adresses prop drilling.Used a store folder for context files. ITS helps keeps the "UI" and "Business logic" separate from each other.
// Note: We use Context Api when there are so many common "usState" or "useRef"
