// const Item = (props) => {
//   return <li className="list-group-item">{props.foodItem}</li>;
// };

// export default Item;

import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };
  // Now we want to pass data from "Child" to "Parent" via Events.In which we will used this method

  return (
    <li
      className={`${styles["um-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["um-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
        // {(event) => handleBuyButtonClicked(event)} we used this for parent to child via props through events
        // Enable upward communication from Child to Parent
        // In this method the Function look at the behaviour ("means Props, Behaivour").and then they return the same
        // In this method "PARENT" will decide what will be the behaviour
      >
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
  handleBuyButton: PropTypes.func.isRequired,
  bought: PropTypes.bool.isRequired,
};

export default Item;
