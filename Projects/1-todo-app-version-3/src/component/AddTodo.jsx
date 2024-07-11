import { useRef } from "react";
// import { useState } from "react";
// import PropTypes from "prop-types";
import { MdAddBox } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  // when we use "ref" we can remove or not want "use state " and "event handler". it will easy the code to write and we cannot declear "use State " and "events"
  // USEREF = It allow access to DOM element and retains mutable values without re-renders

  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`noOfUpdates are ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    // console.log(`${todoName} due on ${todoDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, todoDate);
    //   setTodoName("");
    //   setTodoDate("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-rows" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={todoDate} onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            style={{ marginLeft: "-86px" }}
            // onClick={handleAddButtonClicked}
          >
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

// AddTodo.propTypes = {
//   // onNewItem: PropTypes.func.isRequired,
// };

export default AddTodo;
