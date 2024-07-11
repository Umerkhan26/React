import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.array.isRequired,
};

export default TodoItems;
