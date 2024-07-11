import TodoItem from "./TodoItem";
// import PropTypes from "prop-types";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  // const todoItems = useContext(TodeItemscontext);
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  // console.log(`items from context:${TodeItemscontext}`);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

// TodoItems.propTypes = {
//   onDeleteClick: PropTypes.func.isRequired,
// };

export default TodoItems;
