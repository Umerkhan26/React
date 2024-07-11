import styles from "./FoodInput.module.css";
import PropTypes from "prop-types";

const FoodInput = ({ handleKeyDown }) => {
  //   const handleOnChange = (event) => {
  //     console.log(event.target.value);
  //   };

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      //   onChange={handleOnChange}
      onKeyDown={handleKeyDown} // when we press "enter" key it didnot change so we used this event
    />
  );
};

FoodInput.propTypes = {
  handleKeyDown: PropTypes.func.isRequired,
};

export default FoodInput;
