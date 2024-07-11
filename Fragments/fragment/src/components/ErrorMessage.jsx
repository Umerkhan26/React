// const ErrorMessage = ({ items }) => {
//   // let foodItems  = ["Salad", "Roti", "Rice", "Milk", "Honey", "Ghee"];
//   return <>{items.length === 0 && <h3>I am still hungry. </h3>} </>;
// };

// export default ErrorMessage;

import PropTypes from "prop-types";

const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am still hungry. </h3>}</>;
};

ErrorMessage.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ErrorMessage;
