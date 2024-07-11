import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row kg-rows ">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button "
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoItem;
